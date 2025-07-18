import MeteoWidget from "@/components/MeteoWidget";

// dans le fichier page.tsx qui est à la racine du dossier app dans src sera rendu sur l'url /
// on peut lui donner le nom qu'on veut
// il peut utiliser dans son JSX des sous composants
export default function App() {
	// ce composant (comme tous les composant avec Next de base) est rendu coté serveur donc si on fait des console.log on les voit dans la console du serveur (terminal)
	console.log("render de Home");
	return (
		<div>
			<h1>Widget Météo Next</h1>
			<MeteoWidget city="Paris" />
			<MeteoWidget city="Toulouse" />
			<MeteoWidget city="Lyon" />
		</div>
	);
}
