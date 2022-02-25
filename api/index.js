const axios = require("axios");

const initiateJBin = (API_KEY) =>
  axios.create({
    baseURL: "https://api.jsonbin.io/v3",
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

module.exports = { initiateJBin };
