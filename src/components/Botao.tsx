import Link from "next/link"
import { useRouter } from "next/router"

interface botaoMusicaProps{
    texto: string,
    cor : string,
    href: string,
    callback: Function 
}

export default function BotaoMusica(props :botaoMusicaProps) {
    const router = useRouter()
return <button className = {` h-full p-5 mx-3 rounded-md z-10 shadow-2xl bg-${props.cor}-300 hover:bg-violet-400`} onClick= {() =>{props.callback()}}>
  {/* <Link href={props.href}>{props.texto}</Link> */}
  {props.texto}
    </button>
}