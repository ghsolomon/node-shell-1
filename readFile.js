const fs = require("fs").promises;
const path = require("path");
module.exports = async (fileName) => {
  try {
    const data = await fs.readFile(path.join(__dirname, fileName), "utf8");
    return data;
  } catch (err) {
    throw err;
  }
};
