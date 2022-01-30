export default class Opcoes {
	private _apiKey: string = process.env.NEXT_PUBLIC_API_KEY;
	private _title: string;
	private _artist: string;
	private _optimizeQuery: boolean = true;

	constructor(title: string = "", artist: string = "") {
		this._title = title;
		this._artist = artist;
	}

	public get title(): string {
		return this._title;
	}

	public get apiKey(): string {
		return this._apiKey;
	}

	public get artist(): string {
		return this._artist;
	}

	private get optimizeQuery(): boolean {
		return this._optimizeQuery;
	}

	public formatado(): object {
		return {
			apiKey: this.apiKey,
			title: this.title,
			artist: this.artist,
			optimezeQuery: this.optimizeQuery,
		};
	}

	public changeTitle(value: string): Opcoes {
		return new Opcoes(value, this.artist);
	}

    public changeArtist(value: string): Opcoes {
		return new Opcoes( this.title, value);
	}
}
