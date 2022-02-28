const { initiateJBin } = require("./api");

const jsonBinWrapper = (API_KEY) => {
  const JSONBin = initiateJBin(API_KEY);

  return {
    get: (binId) => {
      return JSONBin.get(`/b/${binId}`)
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

    getSpecific: (binId, binVersion) => {
      return JSONBin.get(`/b/${binId}/${binVersion}`)
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

    getLatest: (binId) => {
      return JSONBin.get(`/b/${binId}/latest`)
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

    post: (data = {}) => {
      return JSONBin.post(`/b`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
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

    put: (binId, data = {}) => {
      return JSONBin.put(`/b/${binId}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => ({
          status: response.status,
          parentId: response.data.metadata.parentId,
          record: response.data.record,
        }))
        .catch((error) => ({
          status: error.response.status,
          message: error.response.data.message,
        }));
    },

    delete: (binId) => {
      return JSONBin.delete(`/b/${binId}`)
        .then((response) => ({
          status: response.status,
          binId: response.data.metadata.id,
          message: response.data.message,
        }))
        .catch((error) => ({
          status: error.response.status,
          message: error.response.data.message,
        }));
    },
  };
};

module.exports = jsonBinWrapper;
