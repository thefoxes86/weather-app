const loadCityApi = () => {
  return new Promise((resolve, reject) => {
    const response = fetch(
      "https://parseapi.back4app.com/classes/Italycities_City?limit=200&order=name",

      {
        headers: {
          "X-Parse-Application-Id": "Pks1xyELAy1E904qcLCkJEt7dWFMKcIeWqmRNmei", // This is your app's application id
          "X-Parse-REST-API-Key": "CtcIWbO9htPanAV9ksD2lzDF432Hupv4duDlDiQE", // This is your app's REST API key
        },
      }
    );

    if (response) {
      resolve(response);
    } else {
      reject(response.error);
    }
  });
};

export { loadCityApi };
