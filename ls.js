const fs = require('fs');
module.exports = (done) => {
  fs.readdir(__dirname, 'utf8', (err, files) => {
    if (err) {
      done(err);
    } else {
      done(files.join('\n'));
    }
  });
};
