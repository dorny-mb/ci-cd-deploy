const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});
app.disable("etag");

app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));
