export default class LacunaModel {
	private _palavra: string;
	private _aberto: boolean;
	private _correto: boolean;
	private _textoUsuario: string;
	private _fundoPadrao: string;
	private _fundoInput: string;


	constructor(
		palavra: string,
		aberto: boolean = false,
		correto: boolean = false,
		textoUsuario = "",
		fundoPadrao = "white",
		fundoInput: string = ""
	) {
		this._palavra = palavra;
		this._aberto = aberto;
		this._correto = correto;
		this._textoUsuario = textoUsuario;
		this._fundoPadrao = fundoPadrao
		this._fundoInput = fundoInput;
	}

	public abreLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			true,
			this.correto,
			this.textoUsuario,
			this.fundoPadrao,
			this.fundoInput
		);
	}

	public fechaLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			false,
			this.correto,
			this.textoUsuario,
			this.fundoPadrao,
			this.fundoInput
		);
	}

	public alteraVisibilidadeLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			!this.aberto,
			this.correto,
			this.textoUsuario,
			this.fundoPadrao,
			this.fundoInput
		);
	}

	public corrijeLacuna(fundoCorreto: string, fundoErrado: string): LacunaModel {
		const estaCorreto = this.palavra.toLowerCase() === this.textoUsuario.toLowerCase();
		const corFundo = estaCorreto ? fundoCorreto : fundoErrado;
		return new LacunaModel(
			this.palavra,
			false, //fecha a exibição do texto
			estaCorreto,
			this.textoUsuario,
			this.fundoPadrao,
			corFundo
		);
	}

	public escreveLacuna(texto: string): LacunaModel {
		return new LacunaModel(
			this.palavra,
			this.aberto,
			this.correto,
			texto,
			this.fundoPadrao,
			this.fundoInput
		);
	}

	public limpaLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			this.aberto,
			this.correto,
			"",
			this.fundoPadrao,
			this.fundoPadrao
		);
	}

	public get palavra(): string {
		return this._palavra;
	}

	public get aberto(): boolean {
		return this._aberto;
	}

	public get correto(): boolean {
		return this._correto;
	}

	public get textoUsuario(): string {
		return this._textoUsuario;
	}

	public get fundoInput(): string {
		return this._fundoInput;
	}
	public get fundoPadrao(): string {
		return this._fundoPadrao;
	}
}
