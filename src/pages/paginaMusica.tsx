import { useState } from "react";
import BotaoMusica from "../components/Botao";
import Musica from "../components/Musica";
import getLyrics from 'genius-lyrics-api/lib/getLyrics';
import Link from "next/link"
import { useRouter } from "next/router"


import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {

    if(!context.res) {
        context.res.setHeader('Location', '/somewhere-else')
        // Next.js would auto-detect the response being finished and stops it's own process
       context.res.end()
    }
    return {
        props: {
            titulo: context.query?.titulo,
            dificuldade: context.query?.dificuldade,
            letra: await getLyrics(`https://genius.com/${context.query?.caminho}`)
        }, 
        
    }
}

export default function PaginaMusica(props){
    const router = useRouter()

    const tituloEautoria = String(props.titulo).split("by")
    const titulo = tituloEautoria.shift()?.trim().toUpperCase()
    const artista = tituloEautoria.pop()?.trim().toUpperCase()


    const callbackCorrige = ()=>window.dispatchEvent(new CustomEvent("correct"))
    const callbackLimpa = ()=>window.dispatchEvent(new CustomEvent("clean"))
    const callbackMostra = ()=>window.dispatchEvent(new CustomEvent("open"))
    const callbackResortea = ()=>window.location.reload()

    return (
    <main className="flex justify-center m-5 pb-16" >
        <Musica nomeMusica={titulo} nomeArtista={artista} musica = {props.letra} dificuldade= {parseInt(String(props.dificuldade))}/>
        <footer className="fixed bottom-3 w-min h-25 
                            flex justify-center">

        <BotaoMusica texto="Corrigir" callback={callbackCorrige} cor = "bg-red-300"/>
        <BotaoMusica texto="Limpar" callback={callbackLimpa} cor = "bg-yellow-300" /> 
        <BotaoMusica texto="Mostrar" callback={callbackMostra} cor = "bg-green-300" />
        <BotaoMusica texto="Resortear " callback={callbackResortea} cor = "bg-pink-300" /> 
        <BotaoMusica texto="Voltar" callback={()=>router.push("/")} cor = "bg-blue-300" />

        </footer>
    </main>)
}