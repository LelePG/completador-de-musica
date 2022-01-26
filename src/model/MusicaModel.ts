export default class MusicaModel{
    private _musicaTexto: string;
    private _dificuldade: number;
    private _musicaFormatada: any;
    
    
    constructor(musicaTexto: string, dificuldade:number){
        this._musicaTexto = musicaTexto
        this._dificuldade = dificuldade
        this._musicaFormatada = this.formatarMusica(musicaTexto)
    }
    
    private formatarMusica(musica:string):any{
        const musicaQuebrada = musica.split("\n").map((linha) => linha.split(" "))
        const musicaEmObjeto = musicaQuebrada.map(linha =>{
            const linhaEmObjeto = linha.map(palavra => {
                let lacuna = this.chanceDeModificacao() >= 80  ? true :false
                return {texto: palavra, temLacuna: lacuna }
            })
            return linhaEmObjeto
        })
        return musicaEmObjeto
    }

    private terminaSemPontuacao(palavra: string){
        return palavra.endsWith(" ") || palavra.endsWith("\n")
    }

    public chanceDeModificacao(){
        const num = Math.random() * (100);
        const chance = Math.round(num * (1-this.dificuldade));
        return chance
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


}