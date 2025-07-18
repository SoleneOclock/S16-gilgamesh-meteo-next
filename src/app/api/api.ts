export const fetchWeatherData = async (city: string) => {
	const API_KEY = process.env.API_KEY;
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
	);
	const weatherData = (await response.json()) as WeatherData;

	return weatherData;
};
