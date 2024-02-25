export default class GapModel {
	private readonly _word: string;
	private readonly _isOpen: boolean;
	private readonly _isCorrect: boolean;
	private readonly _inputText: string;
	private readonly _defaultBackground: string;
	private readonly _background: string;

	constructor(word: string, isOpen: boolean = false, isCorrect: boolean = false, inputText = "", defaultBackground = "white", background: string = "") {
		this._word = word;
		this._isOpen = isOpen;
		this._isCorrect = isCorrect;
		this._inputText = inputText;
		this._defaultBackground = defaultBackground;
		this._background = background;
	}

	public open(): GapModel {
		return new GapModel(this.word, true, this.isCorrect, this.inputText, this.defaultBackground, this.background);
	}

	public close(): GapModel {
		return new GapModel(this.word, false, this.isCorrect, this.inputText, this.defaultBackground, this.background);
	}

	public toggleVisibility(): GapModel {
		return new GapModel(this.word, !this.isOpen, this.isCorrect, this.inputText, this.defaultBackground, this.background);
	}

	public correct(rightColor: string, wrongColor: string): GapModel {
		const isCorrect = this.word.toLowerCase() === this.inputText.toLowerCase();
		const newBackground = isCorrect ? rightColor : wrongColor;
		return new GapModel(
			this.word,
			false, 
			isCorrect,
			this.inputText,
			this.defaultBackground,
			newBackground
		);
	}

	public updateText(texto: string): GapModel {
		return new GapModel(this.word, this.isOpen, this.isCorrect, texto, this.defaultBackground, this.background);
	}

	public clean(): GapModel {
		return new GapModel(this.word, this.isOpen, this.isCorrect, "", this.defaultBackground, this.defaultBackground);
	}

	public get word(): string {
		return this._word;
	}

	public get isOpen(): boolean {
		return this._isOpen;
	}

	public get isCorrect(): boolean {
		return this._isCorrect;
	}

	public get inputText(): string {
		return this._inputText;
	}

	public get background(): string {
		return this._background;
	}
	public get defaultBackground(): string {
		return this._defaultBackground;
	}
}
