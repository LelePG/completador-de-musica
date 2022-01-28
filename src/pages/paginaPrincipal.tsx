import { useRouter } from "next/router";
import { useState } from "react";
import BotaoMusica from "../components/Botao";
import Musica from "../components/Musica";

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



export default function PaginaPrincipal(){
    const router = useRouter()

    const [corrige, setCorrige] = useState(false)

    const objetoCorrige = {
        pathname: "/",
        query:{corrige:"true"}
    }

    return (
    <main className="flex justify-center m-5 pb-16" >
        <Musica nomeMusica="Heroes" musica = {musicaAPI} dificuldade={10} ativaCorrecao={corrige}/>
        <footer className="fixed bottom-3 w-3/4 lg:w-2/4 h-25 
                            flex justify-center">

        <BotaoMusica texto="Corrigir" callback={()=>{window.dispatchEvent(new CustomEvent("ativaCorrecao"))}} cor = "red" href="/?corrige=true"/>
        {/* <BotaoMusica texto="Resortear lacunas" callback={()=>{}} cor = "green" href ={objetoCorrige}/> */}
        {/* <BotaoMusica texto="Procurar nova música" callback={()=>console.log("oi")} cor = "blue" href={objetoCorrige}/> */}

        </footer>
    </main>)
}