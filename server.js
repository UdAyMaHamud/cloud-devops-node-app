const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Cloud DevOps Node.js Application v1");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        environment: process.env.NODE_ENV || "development"
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
});