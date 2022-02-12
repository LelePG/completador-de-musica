export default class langModel {
	private _textCorrect: string;
	private _textCleanAll: string;
	private _textShowAll: string;
	private _textHideAll: string;
	private _textReload: string;
	private _textGoBack: string;

	constructor(textCorrect: string, textCleanAll: string, textShowAll: string, textHideAll: string, textReload: string, textGoBack: string) {
		this._textCorrect = textCorrect;
		this._textCleanAll = textCleanAll;
		this._textShowAll = textShowAll;
		this._textHideAll = textHideAll;
		this._textReload = textReload;
		this._textGoBack = textGoBack;
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
}
