import searchSong from 'genius-lyrics-api/lib/searchSong';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
import Botao from '../components/Botao';
import CardMusica from '../components/CardMusica';
import TextoInput from '../components/TextoInput';
import Opcoes from '../model/Opcoes';


export default function PaginaInicial(){
    const [opcoes,setOpcoes] = useState(new Opcoes())
    const [dificuldadeSlider, setDificuldadeSlider] = useState(20)
    const [musicasEncontadas,setMusicasEncontadas] = useState([])

    const router = useRouter()

    const updateTitle = (text: string) => setOpcoes(opcoes.changeTitle(text))
    const updateArtist = (text: string) => setOpcoes(opcoes.changeArtist(text))
    const procuraMusica = () => searchSong(opcoes.formatado()).then((musicas)=>setMusicasEncontadas(musicas)).catch((e)=> setMusicasEncontadas([<p>Os seguintes problemas foram encontrados:</p>, <p>{String(e).includes("title")? "O título da música não foi informado": "O artista não foi informado"}</p>]))

    function exibeResultado(){
        if(musicasEncontadas[0]?.type === "p"){
            return musicasEncontadas
        }
        else if(musicasEncontadas === []){
            return <p>Não encontramos nenhuma música. Tente novamente.</p>
        }

        const musicasExibiveis = musicasEncontadas.map((musica)=>{
            return <CardMusica title= {musica.title} url = {musica.url} dificuldade = {dificuldadeSlider} id ={musica.id}   albumArt = {musica.albumArt}/>
        })

        return <ul className='flex flex-col justify-center items-center w-full'>{musicasExibiveis}</ul>
    }


return(<div className='flex flex-col justify-center items-center text-lg mt-10'>
    <h1 className='text-2xl font-bold m-5'>Pesquise pela Música</h1>
    <div className='flex flex-wrap mb-5'>
    <TextoInput valor = {opcoes.title} textoLabel='Titulo:' callback={updateTitle} textoPadrao='Heroes'/>
    <TextoInput valor = {opcoes.artist} textoLabel='Artista:' callback={updateArtist} textoPadrao='David Bowie'/>
    </div>
    <div className='flex align-center gap-3 my-3'>
    <label >Dificuldade: </label>
    <input type="range" name="dificuldade" min="10" max="40" value={dificuldadeSlider} step="5" className="bg-red-300" onChange={(e)=> setDificuldadeSlider(parseInt(e.target.value))}></input>
    </div>
    <Botao texto = "Pesquisar" callback = {procuraMusica} cor="bg-blue-500 my-3"/>
        {exibeResultado()}
    </div>
)
}