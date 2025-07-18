import FavBtn from "./FavBtn";

interface ICityProps {
	city: string;
}

// MeteoWidget est un composant (pas une page) c'est un morceau d'UI réutilisable
// ce composant reçoit en props une city
// un composant rendu coté serveur peut etre asynchrone
// le client attendra le temps qu'il faut
// pendant que la promesse renvoyée par le composant est pending , le client va recevoir une page de loading
// si la promesse est rejected (si y'a eu une erreur throwed dans le code du composant asynchrone) le client va recevoir une page d'erreur
// si tout se passe bien le client va recevoir notre JSX de notre composant !
export default async function MeteoWidget({ city }: ICityProps) {
	// on voudrait au render de ce composant faire un call API pour aller chercher des données sur ce endpoint :
	// https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=47840f4f526d9cc69b4b575c52495860&units=metric

	// si le render de ce composant était coté client : prévoir un state vide. au premier render, après le premier render dans un useEffect (avec tableau de deps vide) on lance le call API , on recupere la température, on met à jour le state, ça declanche un deuxieme rendu : la temperature s'affiche

	// ici le render il est coté serveur, il peut etre asynchrone, on peut faire direct le call API et remplir le JSX avec les données dès le premier render

	// on a placé la clé API dans un fichier non commité qui reste en local le .env.local, next place sa valeur dans process.env
	const API_KEY = process.env.API_KEY;
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
	);
	const weatherData = (await response.json()) as WeatherData;

	return (
		<div className="relative bg-blue-200 p-4 flex rounded-lg text-cyan-950 w-full sm:w-32  ">
			<img
				src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
			/>
			<div>
				<h2>{city}</h2>
				<div>{weatherData.main.temp.toFixed()}°C</div>
			</div>

			<FavBtn />
		</div>
	);
}
