const readFile = require("./readFile");
const formatFilename = (fileName) => `==> ${fileName} <==\n`;

module.exports = async (filesArray, done) => {
  const output = [];
  for (let file of filesArray) {
    try {
      const data = await readFile(file);
      output.push(
        formatFilename(file) + data.split("\n").slice(0, 10).join("\n")
      );
    } catch (error) {
      done("Could not find that file!");
    }
  }
  done(output.join("\n\n"));
};
