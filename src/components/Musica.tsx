
interface musicaProps {
	nomeMusica:string;
	musica:string;
	dificuldade: 10 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60;
}

import Lacuna from "./Lacuna";
import MusicaModel from "../model/MusicaModel";

function corrigeTodasLacunas(){

}

export default function Musica(props: musicaProps) {
	const musica = new MusicaModel(props.nomeMusica, props.musica, props.dificuldade);

	const musicaRenderizavel = musica.musicaFormatada.map(
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
				<div key={indiceLinha} className="flex whitespace-pre h-10">
					{novaLinha}
				</div>
			);
		}
	);

	return (
		<section className="flex flex-col flex-wrap border-black border-4 p-4 shadow-2xl rounded-md w-min">
			<h1 className="text-xl font-bold place-self-center mb-4">
				{musica.nome}
			</h1>
			{musicaRenderizavel}
		</section>
	);
}
