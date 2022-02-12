export default class WordGapModel {
	private _word: string;
	private _isOpen: boolean;
	private _isCorrect: boolean;
	private _userInput: string;
	private _defaultBackground: string;
	private _background: string;

	constructor(word: string, isOpen: boolean = false, isCorrect: boolean = false, userInput = "", defaultBackground = "white", background: string = "") {
		this._word = word;
		this._isOpen = isOpen;
		this._isCorrect = isCorrect;
		this._userInput = userInput;
		this._defaultBackground = defaultBackground;
		this._background = background;
	}

	public openGap(): WordGapModel {
		return new WordGapModel(this.word, true, this.isCorrect, this.userInput, this.defaultBackground, this.background);
	}

	public closeGap(): WordGapModel {
		return new WordGapModel(this.word, false, this.isCorrect, this.userInput, this.defaultBackground, this.background);
	}

	public changeGapVisibility(): WordGapModel {
		return new WordGapModel(this.word, !this.isOpen, this.isCorrect, this.userInput, this.defaultBackground, this.background);
	}

	public correctGap(rightColor: string, wrongColor: string): WordGapModel {
		const isCorrect = this.word.toLowerCase() === this.userInput.toLowerCase();
		const newBackground = isCorrect ? rightColor : wrongColor;
		return new WordGapModel(
			this.word,
			false, //fecha a exibição do texto
			isCorrect,
			this.userInput,
			this.defaultBackground,
			newBackground
		);
	}

	public write(texto: string): WordGapModel {
		return new WordGapModel(this.word, this.isOpen, this.isCorrect, texto, this.defaultBackground, this.background);
	}

	public cleanGap(): WordGapModel {
		return new WordGapModel(this.word, this.isOpen, this.isCorrect, "", this.defaultBackground, this.defaultBackground);
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

	public get userInput(): string {
		return this._userInput;
	}

	public get background(): string {
		return this._background;
	}
	public get defaultBackground(): string {
		return this._defaultBackground;
	}
}
