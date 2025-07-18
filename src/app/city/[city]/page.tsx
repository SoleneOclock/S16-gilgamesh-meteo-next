// cette page sera rendue pour les urls : "/city/:city" -> version des url avec react-router

import { fetchWeatherData } from "@/app/api/api";
import Title from "@/components/Title";

interface ICityPageProps {
	params: Promise<{ city: string }>;
}

export default async function CityPage({ params }: ICityPageProps) {
	// on veut recuperer la ville de l'URL pour l'afficher et fetch la temperature dans cette ville
	// on reçoit direct en props du composant une promesse avec les valeurs des segments dynamiques
	const { city } = await params;
	const weatherData = await fetchWeatherData(city);

	// on fetch les données de météo

	return (
		<div className="p-4">
			<Title>Page {city}</Title>
			<img
				alt="meteo-icon"
				src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
			/>
			<p>{weatherData.weather[0].description}</p>
			<p>Température : {weatherData.main.temp}</p>
			<p>Température resentie : {weatherData.main.feels_like}</p>
		</div>
	);
}
