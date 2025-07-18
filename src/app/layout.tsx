import type { Metadata } from "next";
import "./globals.css";

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
						<nav>home - contact</nav>
					</header>
					{children}
				</div>
			</body>
		</html>
	);
}
