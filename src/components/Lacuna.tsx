interface lacunaProps {
	palavra: string;
}

import { useState } from "react";
import LacunaModel from "../model/LacunaModel";
import { Check, Lampada } from "./Icones";

export default function Lacuna(props: lacunaProps) {
	const [lacunaAtual, setLacunaAtual] = useState(
		new LacunaModel(props.palavra)
	);

	const parteVisivel = () => {
		const inputConfig = (
			<input
				className={`w-full border-0 text-center ${lacunaAtual.fundoInput}`}
				value={lacunaAtual.textoUsuario}
				onChange={(e) =>
					setLacunaAtual(lacunaAtual.escreveLacuna(e.target.value))
				}
				type="text"
			/>
		);
        const textoConfig = (<p className="w-full text-center align-bottom font-bold">
            {lacunaAtual.palavra} 
            </p>)
		return lacunaAtual.aberto ? textoConfig : inputConfig;
	};
	const alteraVisibilidade = () => {
		setLacunaAtual(lacunaAtual.alteraVisibilidadeLacuna());
	};
	const corrigePalavra = () => {
		setLacunaAtual(lacunaAtual.corrijeLacuna("bg-green-300", "bg-red-300"));
	};

	return (
		<div className="flex gap-2 p-1 w-44 border rounded-md border-black">
			{parteVisivel()}
			<div>
				{Check(corrigePalavra, 4)}
				{Lampada(alteraVisibilidade, 4)}
			</div>
		</div>
	);
}
