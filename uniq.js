const readFile = require("./readFile");
module.exports = async (fileName, done) => {
  try {
    const data = await readFile(fileName);
    const lines = data.trim().split("\n"); // array
    const newFileContents = lines
      .filter((line, index, array) => {
        return line !== array[index - 1];
      })
      .join(`\n`);
    done(newFileContents);
  } catch (err) {
    done("Could not read file!");
  }
};
