const readFile = require("./readFile");
module.exports = async (fileName, done) => {
  try {
    const data = await readFile(fileName);
    const lines = data.trim().split("\n");
    const words = [];
    for (let line of lines) {
      words.push(...line.split(" "));
    }
    done(`\t${lines.length}\t${words.length}\t${data.length}\t${fileName}`);
  } catch (error) {
    done("Could not read file!");
  }
};
