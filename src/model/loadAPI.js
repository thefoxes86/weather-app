export default function loadAPI(city) {
  return new Promise((resolve, reject) => {
    const appid = "120b85033630559bfcf403a6e157d406";
    const api =
      "pro.openweathermap.org/data/2.5/forecast/hourly?q=" +
      city +
      "&mode=xml&appid=" +
      appid;
    const res = fetch(api);

    res.then((response) => resolve(response));

    res.catch((error) => reject(error));
  });
}
