interface botaoMusicaProps{
    texto: string,
    cor : string,
    callback: Function 
}

export default function BotaoMusica(props :botaoMusicaProps) {
return <button className = {` h-full p-5 mx-3 rounded-md z-10 shadow-2xl bg-${props.cor}-300 hover:bg-violet-400`} onClick= {() =>{props.callback()}}>
    {props.texto}
    </button>
}