"use client";
// la ligne ci dessus indique que ce composant là est rendu coté client comme ça on peut mettre un state et un onclick

import { useState } from "react";

export default function FavBtn() {
	// ce composant est rendu coté client car on veut qu'il refasse son rendu quand le state change si un click survient (une interaction client ce qui est impossible dan sun composant serveur)
	console.log("rendu FavBtn");

	const [isFav, setIsFav] = useState(false);

	return (
		<button
			className="absolute top-4 right-4"
			type="button"
			onClick={() => setIsFav(!isFav)}
		>
			{isFav ? "❤️" : "🤍"}
		</button>
	);
}
