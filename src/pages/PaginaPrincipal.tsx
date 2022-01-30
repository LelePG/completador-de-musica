import { useState } from "react";
import BotaoMusica from "../components/Botao";
import Musica from "../components/Musica";
import getLyrics from 'genius-lyrics-api/lib/getLyrics';

interface paginaPrincipalProps{
    caminho: string
}

export default function PaginaPrincipal(props:paginaPrincipalProps){
    const [letra,setLetra] = useState("")
    const titulo = props.caminho.split("-").splice(1).join(" ").toUpperCase()
    const artista = props.caminho.split("-").pop().toUpperCase()


    getLyrics(`https://genius.com/${props.caminho}-lyrics`).then((texto)=>setLetra(texto))




    const callbackCorrige = ()=>window.dispatchEvent(new CustomEvent("ativaCorrecao"))
    const callbackLimpa = ()=>window.dispatchEvent(new CustomEvent("limpaLacunas"))
    const callbackResortea = ()=>window.location.reload()


    return (
    <main className="flex justify-center m-5 pb-16" >
        <Musica nomeMusica={titulo} nomeArtista={artista} musica = {letra} dificuldade={10}/>
        <footer className="fixed bottom-3 w-3/4 lg:w-2/4 h-25 
                            flex justify-center">

        <BotaoMusica texto="Corrigir" callback={callbackCorrige} cor = "bg-red-300"/>
        <BotaoMusica texto="Limpar " callback={callbackLimpa} cor = "bg-yellow-300" /> 
        <BotaoMusica texto="Resortear " callback={callbackResortea} cor = "bg-green-300" /> 
        <BotaoMusica texto="Procurar música" callback={()=>console.log("oi")} cor = "bg-blue-300" />

        </footer>
    </main>)
}