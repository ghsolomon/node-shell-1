const readFile = require("./readFile");
module.exports = async (fileName, done) => {
  try {
    const data = await readFile(fileName);
    done(data.split("\n").sort().join("\n"));
  } catch (err) {
    done("Could not find that file!");
  }
};
