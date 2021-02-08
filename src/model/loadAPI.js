export default function loadAPI(endpoint) {
  return new Promise((resolve, reject) => {
    const res = fetch(endpoint);

    res.then((response) => resolve(response.data));

    res.catch((error) => reject(error.message));
  });
}
