import { useState } from "react";
import BotaoMusica from "../components/Botao";
import Musica from "../components/Musica";
import getLyrics from 'genius-lyrics-api/lib/getLyrics';
import Link from "next/link"
import { useRouter } from "next/router"

export default function PaginaMusica(){

    const router = useRouter()
    const [letra,setLetra] = useState("")

    const caminho = router.query.caminho
    const dificuldade = router.query.dificuldade
    const tituloEautoria = String(router.query.titulo).split("by")
    
    const titulo = tituloEautoria.shift()?.trim().toUpperCase()
    const artista = tituloEautoria.pop()?.trim().toUpperCase()

 getLyrics(`https://genius.com/${caminho}`).then((texto)=>setLetra(texto))

    const callbackCorrige = ()=>window.dispatchEvent(new CustomEvent("ativaCorrecao"))
    const callbackLimpa = ()=>window.dispatchEvent(new CustomEvent("limpaLacunas"))
    const callbackResortea = ()=>window.location.reload()

    return (
    <main className="flex justify-center m-5 pb-16" >
        <Musica nomeMusica={titulo} nomeArtista={artista} musica = {letra} dificuldade= {parseInt(String(dificuldade))}/>
        <footer className="fixed bottom-3 w-3/4 lg:w-2/4 h-25 
                            flex justify-center">

        <BotaoMusica texto="Corrigir" callback={callbackCorrige} cor = "bg-red-300"/>
        <BotaoMusica texto="Limpar " callback={callbackLimpa} cor = "bg-yellow-300" /> 
        <BotaoMusica texto="Resortear " callback={callbackResortea} cor = "bg-green-300" /> 
        <BotaoMusica texto="Voltar" callback={()=>router.push("/")} cor = "bg-blue-300" />

        </footer>
    </main>)
}