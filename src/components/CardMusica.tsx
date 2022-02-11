import { useRouter } from "next/router"

interface CardMusicaProps{
        title: string,
        url:string,
        dificuldade : number
        id:number
        albumArt:string
}

export default function CardMusica(props :CardMusicaProps) {
const router = useRouter()

    const objetoRota = {
        pathname: '/paginaMusica',
     query: {
         titulo: props.title,
         caminho:props.url.split("/").pop(),
         dificuldade: props.dificuldade
     }
}

const alteraCaminho = (e) =>{
    e.preventDefault()
    router.push(objetoRota)
}

return <li key = {props.id} className='w-1/4  m-2 rounded-md border-2 border-black'>
                    <a onClick = {(e)=> alteraCaminho(e)} className="flex justify-evenly items-center h-full w-full bg-neutral-100  p-2 hover:bg-neutral-200">
                <img src={props.albumArt} className="w-20 rounded-sm"/>
                <span className='ml-4'>{props.title}</span>
                    </a>
            </li>

}