const { initiateJBin } = require("./api");

exports.jsonBinWrapper = (API_KEY) => {
  const JSONBin = initiateJBin(API_KEY);

  return {
    getBin: async (binId) => {
      await JSONBin.get(`/b/${binId}`)
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

    getSpecificBin: async (binId, binVersion) => {
      await JSONBin.get(`/b/${binId}/${binVersion}`)
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

    getLatestBin: async (binId) => {
      await JSONBin.get(`/b/${binId}/latest`)
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

    postBin: async (data = {}) => {
      await JSONBin.post(`/b`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
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

    putBin: async (binId, data = {}) => {
      await JSONBin.put(`/b/${binId}`, data, {
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

    deleteBin: async (binId) => {
      return await JSONBin.put(`/b/${binId}`)
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
  };
};
