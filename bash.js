const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");
const tail = require("./tail");
const sort = require("./sort");
const wc = require("./wc");
const uniq = require("./uniq");
const find = require("./find");

const done = (output) => {
  if (output) {
    process.stdout.write(output + "\n");
  }
  process.stdout.write("prompt > ");
};

done();

process.stdin.on("data", (data) => {
  const userInput = data.toString().trim().split(" ");
  const cmd = userInput[0];
  const arg = userInput[1];
  const argsArray = userInput.slice(1);
  switch (cmd) {
    case "pwd":
      pwd(done);
      break;
    case "ls":
      ls(done);
      break;
    case "cat":
      cat(arg, done);
      break;
    case "curl":
      curl(arg, done);
      break;
    case "date":
      date(done);
      break;
    case "echo":
      echo(argsArray, done);
      break;
    case "head":
      head(argsArray, done);
      break;
    case "tail":
      tail(argsArray, done);
      break;
    case "sort":
      sort(arg, done);
      break;
    case "wc":
      wc(arg, done);
      break;
    case "uniq":
      uniq(arg, done);
      break;
    case "find":
      find(argsArray, done);
      break;
    default:
      process.stdout.write("You typed: " + cmd);
  }
});
