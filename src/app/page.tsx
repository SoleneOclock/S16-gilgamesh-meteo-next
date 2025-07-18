import MeteoWidget from "@/components/MeteoWidget";
import Title from "@/components/Title";

// dans le fichier page.tsx qui est à la racine du dossier app dans src sera rendu sur l'url /
// on peut lui donner le nom qu'on veut
// il peut utiliser dans son JSX des sous composants
export default function App() {
	// ce composant (comme tous les composant avec Next de base) est rendu coté serveur donc si on fait des console.log on les voit dans la console du serveur (terminal)
	console.log("render de Home");
	const environnement = process.env.NODE_ENV;
	return (
		<div className="p-4">
			<Title>Widget Météo Next {environnement}</Title>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
				<MeteoWidget city="Paris" />
				<MeteoWidget city="Toulouse" />
				<MeteoWidget city="Lyon" />
			</div>
		</div>
	);
}
