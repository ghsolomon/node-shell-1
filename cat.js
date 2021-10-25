const readFile = require("./readFile");
module.exports = async (fileName, done) => {
  done(await readFile(fileName));
};
