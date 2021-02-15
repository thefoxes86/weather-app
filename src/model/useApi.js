import React, { useState } from "react";

function useApi(endpoint) {
  const [apiResponse, setApiResponse] = useState(null);
  const response = fetch(endpoint);

  response
    .then((json) => {
      setApiResponse(json.response);
      return apiResponse;
    })
    .catch((err) => {
      setApiResponse(err);
      return apiResponse;
    });
}
