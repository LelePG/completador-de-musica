export default class MusicaModel{
    private _musicaTexto: string;
    private _artista: string;
    private _dificuldade: number;
    private _nome : string;
    private _musicaFormatada: any;
    
    
    constructor(nome: string, musicaTexto: string, artista:string, dificuldade:number){
        this._nome = nome
        this._musicaTexto = musicaTexto
        this._artista = artista
        this._dificuldade = dificuldade
        this._musicaFormatada = this.formatarMusica(musicaTexto)
    }
    
    private formatarMusica(musica:string):any{
        const linhaTemColchetes = (linha) => (linha.startsWith("[") || linha.endsWith("]"))
        const linhaTemChaves = (linha) => (linha.startsWith("{") || linha.endsWith("}"))
        const linhaValida = (linha) => linhaTemColchetes(linha) || linhaTemChaves(linha) ? false :true


        const musicaQuebrada = musica?.split("\n").filter((linha)=> linhaValida(linha)  ).map((linha) => linha.split(" "))
        const musicaEmObjeto = musicaQuebrada?.map(linha =>{
            const linhaEmObjeto = linha.map(palavra => {
                let lacuna = this.chanceDeModificacao() <= (this.dificuldade) && this.validaPraTroca(palavra) ? true :false
                return {texto: palavra, temLacuna: lacuna }
            })
            return linhaEmObjeto
        })
        return musicaEmObjeto
    }

    private validaPraTroca(palavra: string){
        const palavraInvalida = palavra.endsWith("?")|| palavra.endsWith("!")|| palavra.endsWith(",")||
         palavra.endsWith(")")|| palavra.startsWith("(")|| palavra.endsWith(":")|| palavra.endsWith(";") || 
         palavra.endsWith("]")|| palavra.startsWith("[")|| palavra.startsWith("¡") || palavra.startsWith("\"") || palavra.endsWith("\"") || palavra.startsWith("\'") || palavra.endsWith("\'") || !palavra.trim()
        return !palavraInvalida
    }

    public chanceDeModificacao(){
        const probabililade = Math.random() * 100
        return  probabililade
    };

    public random(min = 0, max = 50) {
        let num = Math.random() * (max - min) + min;
    
        return Math.floor(num);
    };

    public get musicaTexto(): string {
        return this._musicaTexto;
    }

    public get dificuldade(): number {
        return this._dificuldade;
    }

    public get musicaFormatada(): any {
        return this._musicaFormatada;
    }

    public get nome(): string {
        return this._nome;
    }

    public get artista(): string {
        return this._artista;
    }


}