interface botaoMusicaProps{
    texto: string,
    cor : string,
    callback: Function 
}

export default function BotaoMusica(props :botaoMusicaProps) {
return <button className = {`${props.cor}`} onClick= {props.callback()}>
    {props.texto}
    </button>
}