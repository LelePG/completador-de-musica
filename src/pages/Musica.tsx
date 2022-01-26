let musicaAPI = `I, I will be king
And you, you will be queen
Though nothing will drive them away
We can beat them just for one day
We can be heroes just for one day

And you, you can be mean
And I, I'll drink all the time
'Cause we're lovers, and that is a fact
Yes, we're lovers, and that is that

Though nothing will keep us together
We could steal time just for one day
We can be heroes forever and ever
What d'you say?

I, I wish you could swim
Like the dolphins, like dolphins can swim

Though nothing, nothing will keep us together
We can beat them forever and ever
Oh, we can be heroes just for one day

I, I will be king
And you, you will be queen
Though nothing will drive them away
We can be heroes, just for one day
We can be us just for one day

I, I can remember (I remember)
Standing by the wall (By the wall)
And the guns shot above our heads (Over our heads)
And we kissed as though nothing could fall (Nothing could fall)

And the shame was on the other side
Oh, we can beat them forever and ever
Then we could be heroes just for one day

We can be heroes
We can be heroes
We can be heroes just for one day
We can be heroes

We're nothing, and nothing will help us
Maybe we're lying, then you better not stay
But we could be safer just for one day
Oh-oh-oh-oh, oh-oh-oh-oh, just for one day`;

interface musicaProps {
	quantidadeLacunas: number;
	dificuldade: 0.1 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4 | 0.45 | 0.5 | 0.55 | 0.6;
}

import Lacuna from "../components/Lacuna";
import MusicaModel from "../model/MusicaModel";

export default function Musica(props: musicaProps) {
	const musica = new MusicaModel(musicaAPI, props.dificuldade);
	const musicaFinal = musica.musicaFormatada.map((linha, indiceLinha) => {
        let novaLinha = linha.map((palavra, indicePalavra) =>{
			return palavra.temLacuna ? (<Lacuna palavra={palavra.texto} key={palavra + indiceLinha + indicePalavra} />) 
                            : (<span key={palavra + indiceLinha + indicePalavra}>{palavra.texto + " "}</span>)
            }
		);
		return <p key = {indiceLinha}className="flex whitespace-pre">{novaLinha}</p>;
	});

    console.log(musicaFinal)

	return <main className="bg-red-300 flex flex-col">
        {musicaFinal}
        </main>;
}
