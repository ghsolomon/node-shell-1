const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const userInput = data.toString().trim().split(' ');
  const cmd = userInput[0];
  const arg = userInput[1];
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(arg);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
