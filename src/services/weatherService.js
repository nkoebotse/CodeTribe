import { DateTime } from 'luxon';

const API_KEY = "17b426a39d69ae487fb55bdaae80dbdf";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch weather data from API
const getWeatherData = async (infoType, searchParams) => {
  const { q, units } = searchParams;
  
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({
    q,
    appid: API_KEY,
    units: units || 'metric',  // Default to 'metric' if units is not provided
  });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null for error handling
  }
};

// Format current weather data
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// Format forecast weather data
const formatForecastWeather = (data) => {
  const timezone = data.city.timezone;

  const formattedDaily = data.list.slice(1, 6).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "ccc"),
    temp: d.main.temp,
    icon: d.weather[0].icon,
  }));

  const formattedHourly = data.list.slice(1, 6).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
    temp: d.main.temp,
    icon: d.weather[0].icon,
  }));

  return { timezone, daily: formattedDaily, hourly: formattedHourly };
};

// Get and format weather data
const getFormattedWeatherData = async (searchParams) => {
  try {
    const currentWeatherData = await getWeatherData("weather", searchParams);
    if (!currentWeatherData) throw new Error("Failed to fetch current weather data");

    const formattedCurrentWeather = formatCurrentWeather(currentWeatherData);
    const { lat, lon } = formattedCurrentWeather;

    const forecastWeatherData = await getWeatherData("forecast", { q: searchParams.q, units: searchParams.units });
    if (!forecastWeatherData) throw new Error("Failed to fetch forecast data");

    const formattedForecastWeather = formatForecastWeather(forecastWeatherData);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };

  } catch (error) {
    console.error('Error fetching weather data:', error);
    return { error: 'Unable to fetch weather data' }; // Handle errors gracefully
  }
};

// Format timestamp to local time
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Generate icon URL from code
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
