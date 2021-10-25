const axios = require("axios");

module.exports = async (url, done) => {
  try {
    const response = await axios.get(url);
    done(response.data);
  } catch (err) {
    done("Could not find that webpage!");
  }
};
