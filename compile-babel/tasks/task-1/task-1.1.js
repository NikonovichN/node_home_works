"use strict";

var readline = _interopRequireWildcard(require("node:readline/promises"));
var _nodeProcess = require("node:process");
var _core = require("../../core");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const rl = readline.createInterface({
  input: _nodeProcess.stdin,
  output: _nodeProcess.stdout
});
async function askQuestion() {
  try {
    let answer = await rl.question("Please enter your phrase (put 'q' to exit): ");
    if (answer == "q") {
      rl.close();
      (0, _nodeProcess.exit)(0);
    }
    console.log(`Your inverted answer: ${(0, _core.reverseString)(answer)}`);
    askQuestion();
  } catch (_) {
    console.log("You have got an error");
    rl.close();
  }
}
(async () => await askQuestion())();