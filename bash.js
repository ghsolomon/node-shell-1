const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')

const done = (output) => {
  if (output){
    process.stdout.write(output + "\n");
  }
  process.stdout.write('prompt > ');
}


done();

process.stdin.on('data', (data) => {
  const userInput = data.toString().trim().split(' ');
  const cmd = userInput[0];
  const arg = userInput[1];
  switch (cmd) {
    case 'pwd':
      pwd(done);
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(arg,done);
      break;
    case 'curl':
      curl(arg,done);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);

  }
});


