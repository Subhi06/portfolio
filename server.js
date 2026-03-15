const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;
const distPath = path.join(__dirname, "dist");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Set PORT to an open port and restart the server.`);
    process.exit(1);
  }

  throw error;
});
