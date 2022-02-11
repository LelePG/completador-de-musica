
interface musicaProps {
	nomeMusica:string;
	nomeArtista:string;
	musica:string;
	dificuldade: number;
}

import Lacuna from "./Lacuna";
import MusicaModel from "../model/MusicaModel";
import { useEffect } from "react";


export default function Musica(props: musicaProps) {
	const musica = new MusicaModel(props.nomeMusica, props.musica, props.nomeArtista, props.dificuldade);

	let musicaRenderizavel= musica.musicaFormatada?.map(
			(linha, indiceLinha) => {
				let novaLinha = linha.map((palavra, indicePalavra) => {
					return palavra.temLacuna ? (
						<Lacuna
							palavra={palavra.texto}
							key={palavra + indiceLinha + indicePalavra}
						/>
					) : (
						<span key={palavra + indiceLinha + indicePalavra}>
							{palavra.texto + " "}
						</span>
					);
				});
				return (
					<div key={indiceLinha} className="flex flex-wrap whitespace-pre my-3">
						{novaLinha}
					</div>
				);
			}
		);

	
	

	return (
		<section className="flex flex-col flex-wrap border-black border-4 p-4 shadow-2xl rounded-md w-3/5 bg-neutral-100">
			<h1 className="text-xl font-bold place-self-center mb-4">
				{musica.nome}
			</h1>
			<h2 className="text-md font-bold place-self-center mb-4">
				{musica.artista}
			</h2>
			{musicaRenderizavel}
		</section>
	);
}
