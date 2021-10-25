const fs = require('fs');
const path = require('path');
module.exports = (fileName,done) => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) done(err);
    else {
      done(data);
    }
  });
};
