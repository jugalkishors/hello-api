const express = require("express");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Heddddddddllo, this is ourrrssssss API!");
});

app.use(express.json());

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
