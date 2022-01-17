const musicaAPI = `I, I will be king
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
Oh-oh-oh-oh, oh-oh-oh-oh, just for one day`


interface musicaProps{
    quantidadeLacunas: number
    dificuldade: 0.1| 0.2|0.25 |0.3|0.35 |0.4|0.45 |0.5|0.55|0.6
}

import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Lacuna from "../components/Lacuna"



export default function Musica(props: musicaProps){

    const cortaMusica = (musica:string) => musica.split(/[.,?!-:; \n]/).filter((texto) => texto.trim())
    const geraNumerosAleatorios = (quantidade:number) => Array.from({length: quantidade * props.dificuldade }, () => Math.floor(quantidade* Math.random() + 1));
    
    const musicaCortada = cortaMusica(musicaAPI)
    const numeros = geraNumerosAleatorios(musicaCortada.length)
    //const musicaFinal = musicaCortada.map((texto, indice)=>numeros.includes(indice) ? <Lacuna key={texto+indice} palavra = {texto}/> : <p key = {texto+indice}>{texto}</p>)
    const musicaFinal = musicaCortada.map((texto, indice)=><Lacuna key={texto+indice} palavra = {texto}/>)

    return(<main>
        <Lacuna palavra="teste"/>
        {/* {musicaFinal} */}
        <p>oj</p>
    </main>)


}