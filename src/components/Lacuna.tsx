interface lacunaProps {
	palavra: string;
	inputUsuario?: string;
}

import {  useEffect, useState } from "react";
import LacunaModel from "../model/LacunaModel";
import { Check, Lampada } from "./Icones";

export default function Lacuna(props: lacunaProps) {
	const [lacunaAtual, setLacunaAtual] = useState(new LacunaModel(props.palavra));

	useEffect(() =>{
		window.addEventListener("ativaCorrecao", () => {corrigePalavra()})
		window.addEventListener("limpaLacunas", ()=> limpaLacuna())
	}, [lacunaAtual,setLacunaAtual])
	
	const alteraVisibilidade = () => setLacunaAtual(lacunaAtual.alteraVisibilidadeLacuna())
	const corrigePalavra = () => setLacunaAtual(lacunaAtual.corrijeLacuna("bg-green-300", "bg-red-300"));
	const alteraTexto = (texto:string)=> setLacunaAtual(lacunaAtual.escreveLacuna(texto))	
	const limpaLacuna = ()=> setLacunaAtual(lacunaAtual.limpaLacuna())	


	const parteVisivel = () => {
		const inputConfig = (
			<input
				className={`w-full rounded-md border border-black text-center ${lacunaAtual.fundoInput}`}
				value={lacunaAtual.textoUsuario}
				onChange={(e) =>
					alteraTexto(e.target.value)
				}
				type="text"
			/>
		);
        const textoConfig = (<p className="w-full text-center align-bottom font-bold">
            {lacunaAtual.palavra} 
            </p>)
		return lacunaAtual.aberto ? textoConfig : inputConfig;
	};

	return (
		<div className="flex w-32 h-8 p-0.5 border rounded-md border-black mr-1">
			{parteVisivel()}
			<aside className="w-3">
				{Check(corrigePalavra,3)}
				{Lampada(alteraVisibilidade, 3)}
			</aside>
		</div>
	);
}
