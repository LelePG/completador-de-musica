import { getLyrics, getSong } from 'genius-lyrics-api';
import searchSong from 'genius-lyrics-api/lib/searchSong';
import { useRef, useState } from 'react';
import Botao from '../components/Botao';
import TextoInput from '../components/TextoInput';
import Opcoes from '../model/Opcoes';


export default function PaginaInicial(){
    const [opcoes,setOpcoes] = useState(new Opcoes())
    const [musicasEncontadas,setMusicasEncontadas] = useState([])


    const updateTitle = (text: string) => setOpcoes(opcoes.changeTitle(text))
    const updateArtist = (text: string) => setOpcoes(opcoes.changeArtist(text))
    const procuraMusica = () => searchSong(opcoes.formatado()).then((musicas)=>setMusicasEncontadas(musicas))

    function formataMusicas(){
        if (musicasEncontadas === []) {
            return
        }
        const musicasExibiveis = musicasEncontadas.map((musica)=>{
            console.log(musica)
            return (<li key = {musica.id} className='flex justify-evenly items-center bg-neutral-200 w-1/4 p-2 m-2 rounded-md'>
                <img src={musica.albumArt} className="w-20 rounded-sm"/>
                <span className='ml-4'>{musica.title}</span>
            </li>)
        })
        return <ul className='flex flex-col justify-center items-center w-full'>{musicasExibiveis}</ul>
    }
    

return(<div className='flex flex-col justify-center items-center text-lg bg-neutral-400'>
    <h1 className='text-2xl font-bold m-5'>Pesquise pela Música</h1>
    <div className='flex flex-wrap mb-5'>
    <TextoInput valor = {opcoes.title} textoLabel='Titulo:' callback={updateTitle} textoPadrao='Heroes'/>
    <TextoInput valor = {opcoes.artist} textoLabel='Artista:' callback={updateArtist} textoPadrao='David Bowie'/>
    </div>
    <Botao texto = "Pesquisar" callback = {procuraMusica} cor="bg-indigo-400"/>
    {formataMusicas()}
    </div>
)
}