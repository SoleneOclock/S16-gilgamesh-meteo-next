interface ICityProps {
	city: string;
}

// MeteoWidget est un composant (pas une page) c'est un morceau d'UI réutilisable
// ce composant reçoit en props une city
export default function MeteoWidget({ city }: ICityProps) {
	// on voudrait au render de ce composant faire un call API pour aller chercher des données sur ce endpoint :
	// https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=47840f4f526d9cc69b4b575c52495860&units=metric

	// si le render de ce composant était coté client : prévoir un state vide. au premier render, après le premier render dans un useEffect (avec tableau de deps vide) on lance le call API , on recupere la température, on met à jour le state, ça declanche un deuxieme rendu : la temperature s'affiche

	// ici le render il est coté serveur, il peut etre asynchrone, on peut faire direct le call API et remplir le JSX avec les données dès le premier render

	return (
		<div className="bg-blue-200 p-4 rounded-lg text-cyan-950 w-full sm:w-32  ">
			<h2>{city}</h2>
			<div>23°C</div>
		</div>
	);
}
