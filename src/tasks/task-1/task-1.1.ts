import * as readline from "node:readline/promises";
import { stdin as input, stdout as output, exit } from "node:process";

import { reverseString } from "../../core";

const rl = readline.createInterface({
  input,
  output,
});

async function askQuestion() {
  try {
    let answer = await rl.question(
      "Please enter your phrase (put 'q' to exit): "
    );

    if (answer == "q") {
      rl.close();
      exit(0);
    }

    console.log(`Your inverted answer: ${reverseString(answer)}`);

    askQuestion();
  } catch (_) {
    console.log("You have got an error");
    rl.close();
  }
}

(async () => await askQuestion())();
