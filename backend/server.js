const express = require("express");
const app = express();
const port = 3000;

app.get("/messages", (req, res) => {
  const messages = ["My very", "Coucou", "Message"];
  res.send(messages);
});

app.listen(port, () => console.log("app running"));
