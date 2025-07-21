// api/weather.js

export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.status(200).json(data);
}
