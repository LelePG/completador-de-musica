interface lacunaProps {
	palavra: string;
	inputUsuario?: string;
}

import {  useEffect, useState } from "react";
import LacunaModel from "../model/LacunaModel";
import { Check, Lampada } from "./Icones";

export default function Lacuna(props: lacunaProps) {
	const [lacunaAtual, setLacunaAtual] = useState(new LacunaModel(props.palavra));
	const alteraVisibilidade = () => setLacunaAtual(lacunaAtual.alteraVisibilidadeLacuna())
	const corrigePalavra = () => setLacunaAtual(lacunaAtual.corrijeLacuna("bg-green-300", "bg-red-300"));
	const alteraTexto = (texto:string)=> setLacunaAtual(lacunaAtual.escreveLacuna(texto))	
	const limpaLacuna = ()=> setLacunaAtual(lacunaAtual.limpaLacuna())	

	useEffect(() =>{
		let isMounted = true
		window.addEventListener("ativaCorrecao", () => {isMounted ? corrigePalavra() : null
			isMounted = false
		
		})
		window.addEventListener("limpaLacunas", ()=> {isMounted ? limpaLacuna():null
			isMounted = false
		})

	}, [lacunaAtual,setLacunaAtual, corrigePalavra, limpaLacuna])
	


	const parteVisivel = () => {
		const inputConfig = (
			<input
				className={`w-4/5 rounded-md border mr-1 text-center border-black`}
				value={lacunaAtual.textoUsuario}
				onChange={(e) =>
					alteraTexto(e.target.value)
				}
				type="text"
			/>
		);
        const textoConfig = (<p className={`w-4/5 rounded-md text-center font-bold `}>
            {lacunaAtual.palavra} 
            </p>)
		return lacunaAtual.aberto ? textoConfig : inputConfig;
	};

	return (
		<div className={`flex w-32 h-8 p-1 border justify-center rounded-md border-black mr-1 ${lacunaAtual.fundoInput}`}>
			{parteVisivel()}
			<aside className="w-3">
				{Check(corrigePalavra,3)}
				{Lampada(alteraVisibilidade, 3)}
			</aside>
		</div>
	);
}
