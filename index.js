const { initiateJBin } = require("./api");

exports.jsonBinWrapper = (API_KEY) => {
  const JSONBin = initiateJBin(API_KEY);

  return {
    getBin: (binId) => {
      return JSONBin.get(`/b/${binId}`)
        .then((response) => {
          return {
            status: response.status,
            binId: response.data.metadata.id,
            record: response.data.record,
          };
        })
        .catch((error) => {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        });
    },

    getSpecificBin: (binId, binVersion) => {
      return JSONBin.get(`/b/${binId}/${binVersion}`)
        .then((response) => {
          return {
            status: response.status,
            binId: response.data.metadata.id,
            record: response.data.record,
          };
        })
        .catch((error) => {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        });
    },

    getLatestBin: (binId) => {
      return JSONBin.get(`/b/${binId}/latest`)
        .then((response) => {
          return {
            status: response.status,
            binId: response.data.metadata.id,
            record: response.data.record,
          };
        })
        .catch((error) => {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        });
    },

    postBin: (data = {}) => {
      return JSONBin.post(`/b`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return {
            status: response.status,
            binId: response.data.metadata.id,
            record: response.data.record,
          };
        })
        .catch((error) => {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        });
    },

    putBin: (binId, data = {}) => {
      return JSONBin.put(`/b/${binId}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return {
            status: response.status,
            binId: response.data.metadata.id,
            record: response.data.record,
          };
        })
        .catch((error) => {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        });
    },

    deleteBin: (binId) => {
      return JSONBin.put(`/b/${binId}`)
        .then((response) => ({
          status: response.status,
          binId: response.data.metadata.id,
          record: response.data.record,
        }))
        .catch((error) => ({
          status: error.response.status,
          message: error.response.data.message,
        }));
    },
  };
};
