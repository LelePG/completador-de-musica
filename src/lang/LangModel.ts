export default class langModel {
	private _textCorrect: string;
	private _textCleanAll: string;
	private _textShowAll: string;
	private _textHideAll: string;
	private _textReload: string;
	private _textGoBack: string;
	private _textProblemsFound: string;
	private _textNoTitle: string;
	private _textNoAuthor: string;
	private _textMainTitle: string;
	private _textSongTitle: string;
	private _textSongAuthor: string;
	private _textDificulty: string;

	public setMainPageText(textMainTitle: string, textSongTitle: string, textSongAuthor: string, textDificulty: string){
		this._textMainTitle = textMainTitle;
		this._textSongTitle = textSongTitle;
		this._textSongAuthor = textSongAuthor;
		this._textDificulty = textDificulty;
	}

	public setSongPageButtons(textCorrect: string, textCleanAll: string, textShowAll: string, textHideAll: string, textReload: string, textGoBack: string) {
		this._textCorrect = textCorrect;
		this._textCleanAll = textCleanAll;
		this._textShowAll = textShowAll;
		this._textHideAll = textHideAll;
		this._textReload = textReload;
		this._textGoBack = textGoBack;
	}

	public setErrorMessages(textProblemsFound: string, textNoTitle: string, textNoAuthor: string) {
		this._textProblemsFound = textProblemsFound;
		this._textNoTitle = textNoTitle;
		this._textNoAuthor = textNoAuthor;
	}

	public get textCorrect(): string {
		return this._textCorrect;
	}
	public get textCleanAll(): string {
		return this._textCleanAll;
	}
	public get textShowAll(): string {
		return this._textShowAll;
	}
	public get textHideAll(): string {
		return this._textHideAll;
	}
	public get textReload(): string {
		return this._textReload;
	}
	public get textGoBack(): string {
		return this._textGoBack;
	}
	public get textProblemsFound(): string {
		return this._textProblemsFound;
	}
	public get textNoAuthor(): string {
		return this._textNoAuthor;
	}
	public get textNoTitle(): string {
		return this._textNoTitle;
	}
	public get textSongAuthor(): string {
		return this._textSongAuthor;
	}
	public get textSongTitle(): string {
		return this._textSongTitle;
	}

	public get textMainTitle(): string {
		return this._textMainTitle;
	}
	public get textDificulty(): string {
		return this._textDificulty;
	}
}
