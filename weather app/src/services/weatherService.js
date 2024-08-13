import { DateTime } from 'luxon';

const API_KEY = "17b426a39d69ae487fb55bdaae80dbdf";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch weather data from API
const getWeatherData = (infoType, searchParams) => {
  const { q, units } = searchParams;
  
  // Construct URL based on infoType and searchParams
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({
    q,
    appid: API_KEY,
    units: units || 'metric'  // Default to 'metric' if units is not provided
  });

  console.log(url)
  // Fetch and return the data
  return fetch(url).then((res) => res.json());
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
    console.log('fcd', data);
    const timezone =  data.city.timezone;

  // Destructure and provide default values to handle undefined cases
//   const { timezone, daily = [], hourly = [] } = data;

  // Process daily and hourly data
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

  

  console.log('tz',timezone, 'd', formattedDaily,'h', formattedHourly);
  

  return { timezone, daily: formattedDaily, hourly: formattedHourly };
};

// Get and format weather data
const getFormattedWeatherData = async (searchParams) => {
  try {
    // Fetch and format current weather
    const formattedCurrentWeather = await getWeatherData("weather", searchParams)
      .then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;
    console.log('fc', formattedCurrentWeather)
    console.log('sp', searchParams)

    // Fetch and format forecast weather
    const formattedForecastWeather = await getWeatherData("forecast", searchParams)
        .then(formatForecastWeather);

    

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
