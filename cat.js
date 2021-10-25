const fs = require('fs');
const path = require('path');
module.exports = (fileName) => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) throw err;
    else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  });
};
