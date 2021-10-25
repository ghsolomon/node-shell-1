const fs = require("fs");
module.exports = (fileNames, done) => {
  fs.readdir(__dirname, "utf8", (err, files) => {
    if (err) {
      done("No files!");
    } else {
      done(
        fileNames
          .map((fileName) =>
            files.includes(fileName)
              ? fileName
              : `find: ${fileName}: No such file or directory`
          )
          .join("\n")
      );
    }
  });
};
