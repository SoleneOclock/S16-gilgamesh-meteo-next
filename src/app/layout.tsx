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
				<header>
					<nav>home - contact</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
