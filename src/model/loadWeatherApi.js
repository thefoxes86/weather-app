export default function loadWeatherApi(city) {
  return new Promise((resolve, reject) => {
    const appid = "120b85033630559bfcf403a6e157d406";
    const api =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&mode=json&appid=" +
      appid;
    const res = fetch(api);

    resolve(res);

    reject(res);
  });
}
