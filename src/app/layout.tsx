import type { Metadata } from "next";
import "./globals.css";

// on importe le composant Link de Next (il est assez similaire à celui de react-router) sauf que si y'a un composant coté serveur il charge le JSX executé coté serveur
import Link from "next/link";

export const metadata: Metadata = {
	title: "Météo widget",
	description: "Créé avec Next",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body>
				<div className="bg-linear-to-t from-sky-500 to-indigo-500 h-screen">
					<header className="bg-sky-600 p-4">
						<nav>
							<Link href="/">home</Link> - <Link href="/contact">contact</Link>
						</nav>
					</header>
					{children}
				</div>
			</body>
		</html>
	);
}
