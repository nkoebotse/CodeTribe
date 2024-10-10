# MLab Weather App

 Description
MLab Weather App is a modern weather application that provides real-time weather information, hourly and daily forecasts, and severe weather alerts. It allows users to save multiple locations, customize the theme, and access cached data when offline. Built with React and TailwindCSS, the app is optimized for performance and user experience.

 Features
- Real-time Weather Information: Displays current temperature, humidity, wind speed, and more.
- Location-Based Forecasting: Users can set or detect their location automatically for weather updates.
- Hourly & Daily Forecasts: Provides detailed hourly and daily weather forecasts.
- Multiple Locations: Save and switch between different locations.
- Weather Alerts: Sends push notifications for severe weather alerts.
- Customization: Users can customize display units (Celsius/Fahrenheit) and app theme.
- Offline Access: Cached data allows weather information to be viewed offline.
- Fast & Smooth Performance: Optimized for a responsive and fast experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mlab-weather-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd mlab-weather-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and visit `http://localhost:3000` to use the app.

## Usage

1. **Set Location**: Use the location input to set your preferred city, or allow the app to detect your current location automatically.
2. **Customize**: Choose between Celsius and Fahrenheit for temperature units.
3. **View Forecasts**: Check both hourly and daily forecasts for your location.
4. **Receive Alerts**: Get notified of severe weather alerts for your saved locations.

## Configuration

- **Environment Variables**: Set up any required API keys for accessing weather data through services like OpenWeatherMap.
- **Units**: The app allows switching between metric (Celsius) and imperial (Fahrenheit) units.
  
  To add additional configurations, you can modify the state management for `query` and `units` in `App.js`.

## Components

- **TopButtons**: Allows users to quickly switch between preset locations.
- **Inputs**: Provides an input field for searching weather information by city.
- **TimeAndLocation**: Displays the current time and location.
- **TemperatureAndDetails**: Shows detailed current weather information.
- **Forecast**: Displays hourly and daily weather forecasts.
- **WeatherService**: Handles API calls for fetching formatted weather data.

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Created by Nkoebotse Elliot Sekgobela - feel free to contact me at [elliotsekobela@gmail.com](mailto:elliotsekobela@gmail.com).
