const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const contentRoutes = require("./routes/content");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000"
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);
app.use("/api", contentRoutes);

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Agency API is running" });
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
