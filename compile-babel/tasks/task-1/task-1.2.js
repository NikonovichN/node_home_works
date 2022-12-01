"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const csvPath = "src/tasks/task-1/sources/nodejs-hw1-ex1.csv";
const txtPath = "src/tasks/task-1/sources/nodejs-hw1-ex1-output.txt";
const readFileStream = _fs.default.createReadStream(csvPath);
const writeFileStream = _fs.default.createWriteStream(txtPath);
const errorHandling = err => {
  console.log("Something went wrong", err);
};
readFileStream.on("error", errorHandling);
writeFileStream.on("error", errorHandling);
readFileStream.pipe((0, _csvtojson.default)()).pipe(writeFileStream);