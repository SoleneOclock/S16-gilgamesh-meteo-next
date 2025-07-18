"use client"; // Error boundaries must be Client Components

// Ce composant est rendu au client si jamais un des composant serveur throw une erreur
import Title from "@/components/Title";

export default function Error({
	error,
}: {
	error: Error & { digest?: string };
}) {
	return (
		<div className="p-4">
			<Title>Something went wrong!</Title>
			<p>
				Ceci est notre page error.tsx qui est rendu automatiquement car un des
				composants à throw une erreur et donc elle a été automatiquement cacthée
				par next qui nous affiche alors ce composant
			</p>
		</div>
	);
}
