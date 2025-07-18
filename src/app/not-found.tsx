import Title from "@/components/Title";

// Ce composant est rendu au client si l'url demandée ne correspond à aucune page de l'arborescences du dossier src/app/
export default function NotFound() {
	return (
		<div className="p-4">
			<Title>404 page non trouvée</Title>
		</div>
	);
}
