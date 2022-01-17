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
				className={`w-3/5 border-0 text-center ${lacunaAtual.fundoInput}`}
				value={lacunaAtual.textoUsuario}
				onChange={(e) =>
					setLacunaAtual(lacunaAtual.escreveLacuna(e.target.value))
				}
				type="text"
			/>
		);
        const textoConfig = (<p className="w-3/5 text-center align-bottom font-bold">
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
		<div className="flex gap-2 w-44 h-12 p-2 border rounded-md border-black">
			{parteVisivel()}
			<div className="w-2/5">
				{Check(corrigePalavra, 2)}
				{Lampada(alteraVisibilidade, 2)}
			</div>
		</div>
	);
}
