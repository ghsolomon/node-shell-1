const fs = require('fs');
const path = require('path');
module.exports = (fileName, done) => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) done(err);
    else {
      const lines = data.trim().split('\n');
      const words = [];
      for (let line of lines) {
        words.push(...line.split(' '));
      }
      const charCount = data.length;
      const wordCount = words.length;
      const lineCount = lines.length;
      done(`\t${lineCount}\t${wordCount}\t${charCount}\t${fileName}`);
    }
  });
};
