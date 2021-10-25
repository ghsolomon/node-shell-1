const fs = require('fs').promises;
const path = require('path');

const formatFilename = (fileName) => `==> ${fileName} <==\n`;

module.exports = async (filesArray, done) => {
  const output = [];
  for (let file of filesArray) {
    try {
      const data = await fs.readFile(path.join(__dirname, file), 'utf8');
      output.push(
        formatFilename(file) + data.split('\n').slice(0, 10).join('\n')
      );
    } catch (error) {
      done(error);
    }
  }
  done(output.join('\n\n'));
};
