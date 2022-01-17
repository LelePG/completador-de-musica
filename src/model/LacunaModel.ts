export default class LacunaModel {
	private _palavra: string;
	private _aberto: boolean;
	private _correto: boolean;
	private _textoUsuario: string;
	private _fundoInput: string;

	constructor(
		palavra: string,
		aberto: boolean = false,
		correto: boolean = false,
		textoUsuario = "",
		fundoInput: string = ""
	) {
		this._palavra = palavra;
		this._aberto = aberto;
		this._correto = correto;
		this._textoUsuario = textoUsuario;
		this._fundoInput = fundoInput;
	}

	abreLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			true,
			this.correto,
			this.textoUsuario,
			this.fundoInput
		);
	}

	fechaLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			false,
			this.correto,
			this.textoUsuario,
			this.fundoInput
		);
	}

	alteraVisibilidadeLacuna(): LacunaModel {
		return new LacunaModel(
			this.palavra,
			!this.aberto,
			this.correto,
			this.textoUsuario,
			this.fundoInput
		);
	}

	corrijeLacuna(fundoCorreto: string, fundoErrado: string): LacunaModel {
		const estaCorreto = this.palavra === this.textoUsuario;
		const corFundo = estaCorreto ? fundoCorreto : fundoErrado;
		return new LacunaModel(
			this.palavra,
			this.aberto,
			estaCorreto,
			this.textoUsuario,
			corFundo
		);
	}

	escreveLacuna(texto: string): LacunaModel {
		return new LacunaModel(
			this.palavra,
			this.aberto,
			this.correto,
			texto,
			this.fundoInput
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
}
