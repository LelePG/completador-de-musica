export default class Options {
	private _apiKey: string = process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN;
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

	public formatted(): object {
		return {
			apiKey: this.apiKey,
			title: this.title,
			artist: this.artist,
			optimezeQuery: this.optimizeQuery,
		};
	}

	public changeTitle(value: string): Options {
		return new Options(value, this.artist);
	}

	public changeArtist(value: string): Options {
		return new Options(this.title, value);
	}
}
