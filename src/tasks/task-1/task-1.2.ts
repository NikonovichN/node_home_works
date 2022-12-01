import csv from "csvtojson";
import fs from "fs";

const csvPath = "src/tasks/task-1/sources/nodejs-hw1-ex1.csv";
const txtPath = "src/tasks/task-1/sources/nodejs-hw1-ex1-output.txt";

const readFileStream = fs.createReadStream(csvPath);
const writeFileStream = fs.createWriteStream(txtPath);

const errorHandling = (err: Error) => {
  console.log("Something went wrong", err);
};

readFileStream.on("error", errorHandling);
writeFileStream.on("error", errorHandling);

readFileStream.pipe(csv()).pipe(writeFileStream);
