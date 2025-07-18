/*
<Title>ici le contenu qui ira dans children</Title>
*/
import type { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
	return <h1 className="text-2xl pb-4 text-cyan-100">{children}</h1>;
}
