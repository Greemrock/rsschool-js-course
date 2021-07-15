/* eslint-disable no-console */
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import categories from "./category/router";
import words from "./words/router";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicPath = path.resolve(__dirname, "../build");
const indexPath = path.resolve(__dirname, "../build/index.html");

// if query not starts with '/api/' string - send file from wwwroot
app.use(/^(?!\/api\/)/, express.static(publicPath));
// if file doesn't exists - send index.html
app.use(/^(?!\/api\/)/, (req, res) => {
  res.sendFile(indexPath);
});
app.use("/api/categories", categories);
app.use("/api/words", words);

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
