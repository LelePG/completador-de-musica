let musicaAPI = `I, I will be king
And you, you will be queen
Though nothing will drive them away
We can beat them just for one day
We can be heroes just for one day

And you, you can be mean
And I, I'll drink all the time
'Cause we're lovers, and that is a fact
Yes, we're lovers, and that is that

Though nothing will keep us together
We could steal time just for one day
We can be heroes forever and ever
What d'you say?

I, I wish you could swim
Like the dolphins, like dolphins can swim

Though nothing, nothing will keep us together
We can beat them forever and ever
Oh, we can be heroes just for one day

I, I will be king
And you, you will be queen
Though nothing will drive them away
We can be heroes, just for one day
We can be us just for one day

I, I can remember (I remember)
Standing by the wall (By the wall)
And the guns shot above our heads (Over our heads)
And we kissed as though nothing could fall (Nothing could fall)

And the shame was on the other side
Oh, we can beat them forever and ever
Then we could be heroes just for one day

We can be heroes
We can be heroes
We can be heroes just for one day
We can be heroes

We're nothing, and nothing will help us
Maybe we're lying, then you better not stay
But we could be safer just for one day
Oh-oh-oh-oh, oh-oh-oh-oh, just for one day`


interface musicaProps{
    quantidadeLacunas: number
    dificuldade: 0.1| 0.2|0.25 |0.3|0.35 |0.4|0.45 |0.5|0.55|0.6
}

import Lacuna from "../components/Lacuna"

export default function Musica(props: musicaProps){

    // const cortaMusica = (musica:string) => musica.split(/[.,?!-:; \n]/).filter((texto) => texto.trim())
    // const geraNumerosAleatorios = (quantidade:number) => Array.from({length: quantidade * props.dificuldade }, () => Math.floor(quantidade* Math.random() + 1));
    // const musicaCortada = cortaMusica(musicaAPI).map( (texto, indice) => ({texto, indice}) )

    // const numeros = geraNumerosAleatorios(musicaCortada.length)
    // const musicaFinal = musicaCortada.map((palavra)=>numeros.includes(indice) ? <Lacuna key={texto+palavra.indice} palavra = {palavra.texto}/> : <p key = {palavra.texto+palavra.indice}>{palavra.texto}</p>)
    //const musicaFinal = musicaCortada.map((texto, indice)=> numeros.includes(indice )?<Lacuna key={texto+indice} palavra = {texto}/> :"")



//     const geraNumerosAleatorios = (quantidade:number) => Array.from({length: quantidade * props.dificuldade }, () => Math.floor(quantidade* Math.random() + 1));
//     const indicesDeTroca = geraNumerosAleatorios(musicaAPI.length)

//    // const adicionaLacunas = Array.from(musicaAPI).map((texto, indice)=>indicesDeTroca.includes(indice) ? <Lacuna key={texto+indice} palavra = {texto}/> : <p key = {texto+indice}>{texto}</p>)
//     const adicionaLacunas = musicaAPI.split("\n").map((texto, indice)=>indicesDeTroca.includes(indice) ? <Lacuna key={texto+indice} palavra = {texto}/> : <p key = {texto+indice}>{texto}</p>)




    //const cortaMusica = (musica:string) => musica.split(/[.,?!-:; \n \b]/).filter((texto) => texto.trim())
    //const geraNumerosAleatorios = (quantidade:number) => Array.from({length: quantidade * props.dificuldade }, () => Math.floor(quantidade* Math.random() + 1));
    
    //const musicaCortada = cortaMusica(musicaAPI)
    //const
    //const palavraPraTrocar = geraNumerosAleatorios(musicaCortada.length).map((i) => ({indice: musicaAPI.indexOf(musicaCortada[i]), texto: musicaCortada[i]}))
    //const musicaParcial = musicaAPI.split(
//let musicaArrumada = musicaAPI
   // let musicaArrumada = numeros.reduce((musicaArrumada, i) =>  musicaArrumada.replace(musicaCortada[i],"{}"), musicaAPI  )
   //musicaArrumada = numeros.reduce((musicaArrumada, i) =>  reactStringReplace( musicaArrumada, musicaCortada[i],<Lacuna palavra="teste"/>), musicaAPI  )
    //let musicaArrumadaPartes = musicaArrumada.split(" ").map((texto) => texto === "{}" ? <Lacuna palavra={musicaCortada[i]}/>: texto + " " )
    //musicaArrumadaPartes = musicaArrumada.split("\n").map((texto) => texto === "{}" ? <Lacuna palavra="teste"/>: texto + "\n" )

    //let musicaArrumada = musicaAPI.split("/n").map((linha, indice) =>({indice, texto: linha.split(" ")}))
    
    //console.log(musicaArrumada)
    //const musicaArrumada = numeros.map((i) => musicaAPI.replace(musicaCortada[i],"aaaaaaaaaa"))

    const chanceDeModificacao = () => {
        let num = Math.random() * (1000);
    
        return Math.round(num * props.dificuldade);
    };

    const random = (min = 0, max = 50) => {
        let num = Math.random() * (max - min) + min;
    
        return Math.floor(num);
    };

    const linhas = musicaAPI.split("\n")

    // const palavras 

    const musicaQuebrada:any = musicaAPI.split("\n").map((linha) => linha.split(" "))
    const musicaComLacunas = musicaQuebrada.map((linha) => {
        if(chanceDeModificacao() >= 50 ){
            const indiceModificacao = random(0,linha.length)
            const linhaTrocavel = linha[indiceModificacao]?.match(/^[a-zA-Z()]+$/)
            linha[indiceModificacao] = linhaTrocavel ? <Lacuna key={linha[indiceModificacao]+indiceModificacao} palavra = {linha[indiceModificacao]}/> : linha[indiceModificacao]
        }
        return linha
    })

    const musicaFinal = musicaComLacunas.map((linha) =>{
        let novaLinha:any = linha.map((palavra,indice) => typeof(palavra)==="string" ?  <span key = {palavra+indice}>{palavra+" "}</span> : palavra)
        return <p className="flex whitespace-pre">{novaLinha}</p>
    })

    console.log(musicaFinal)
    

    

    //const musicaArrumada = 

    //console.log(musicaArrumada)
    return(<main className="bg-red-300 inline">
        {musicaFinal}
    </main>)


}