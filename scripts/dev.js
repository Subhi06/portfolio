const { spawn } = require("child_process");
const net = require("net");
const path = require("path");

const preferredBackendPort = Number(process.env.PORT) || 5001;
const viteBin = getLocalBin("vite");
const nodemonBin = getLocalBin("nodemon");

let shuttingDown = false;
let viteProcess;
let serverProcess;

function getLocalBin(name) {
  const extension = process.platform === "win32" ? ".cmd" : "";
  return path.join(__dirname, "..", "node_modules", ".bin", `${name}${extension}`);
}

function findAvailablePort(port) {
  return new Promise((resolve, reject) => {
    const tester = net.createServer();

    tester.unref();
    tester.once("error", (error) => {
      if (error.code === "EADDRINUSE") {
        resolve(findAvailablePort(port + 1));
        return;
      }

      reject(error);
    });

    tester.once("listening", () => {
      tester.close(() => resolve(port));
    });

    tester.listen(port);
  });
}

function stopChild(child) {
  if (!child || child.killed) {
    return;
  }

  child.kill("SIGTERM");
}

function shutdown(exitCode) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  stopChild(serverProcess);
  stopChild(viteProcess);
  process.exit(exitCode);
}

function attachExitHandler(child, name) {
  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }

    if (signal) {
      console.error(`${name} exited from signal ${signal}.`);
      shutdown(1);
      return;
    }

    if (code !== 0) {
      console.error(`${name} exited with code ${code}.`);
      shutdown(code || 1);
      return;
    }

    shutdown(0);
  });
}

async function start() {
  const backendPort = await findAvailablePort(preferredBackendPort);
  const sharedEnv = {
    ...process.env,
    PORT: String(backendPort),
    VITE_API_TARGET: `http://localhost:${backendPort}`
  };
  const childOptions = {
    env: sharedEnv,
    shell: process.platform === "win32",
    stdio: "inherit"
  };

  console.log(`Starting backend on port ${backendPort}.`);

  serverProcess = spawn(nodemonBin, ["server.js"], childOptions);

  viteProcess = spawn(viteBin, [], childOptions);

  attachExitHandler(serverProcess, "Backend server");
  attachExitHandler(viteProcess, "Vite dev server");
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

start().catch((error) => {
  console.error("Failed to start development services.");
  console.error(error);
  process.exit(1);
});