import { getLyrics, getSong } from 'genius-lyrics-api';
import searchSong from 'genius-lyrics-api/lib/searchSong';
import { useState } from 'react';
// const options = {
// 	apiKey: process.env.API_KEY,
// 	title: 'Blinding Lights',
// 	artist: 'The Weeknd',
// 	optimizeQuery: true
// };



//getLyrics(options).then((lyrics) => console.log(lyrics));

// getSong(options).then((song) =>
// 	console.log(`
// 	${song.id}
// 	${song.title}
// 	${song.url}
// 	${song.albumArt}
// 	${song.lyrics}`)
// );

export default function PaginaInicial(){
    const [titulo,setTitulo] = useState("")
    const [artista,setArtista] = useState("")


    return(<div><input value ={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
    <input value ={artista} onChange={(e)=>setArtista(e.target.value)}/>
    <button onClick={()=>{searchSong({
        	apiKey: "",
            title: titulo,
            artist: artista
    }).then((coisa)=>console.log(coisa))}}>pesquisa</button></div>)
}