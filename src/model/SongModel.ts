export default class songLyricsModel {
	private _songLyrics: string;
	private _artist: string;
	private _dificulty: number;
	private _songTitle: string;
	private _formattedSong: any;

	constructor(songTitle: string, songLyrics: string, artist: string, dificulty: number) {
		this._songTitle = songTitle;
		this._songLyrics = songLyrics;
		this._artist = artist;
		this._dificulty = dificulty;
		this._formattedSong = this.formatter(songLyrics);
	}

	private textHasBrackets(text) {
		return text.startsWith("[") || text.endsWith("]");
	}

	private textHasCurlyBraces(text) {
		return text.startsWith("{") || text.endsWith("}");
	}

	private formatter(songLyrics: string) {
		const lineIsValid = (line) => (this.textHasBrackets(line) || this.textHasCurlyBraces(line) || line.length <= 2 ? false : true);

		const validLines = songLyrics?.split("\n").filter((line) => lineIsValid(line));
		const allValidWords = validLines?.map((line) => line.split(" "));

		const lyricsWithData = allValidWords?.map((line) => {
			const lineWithData = line.map((word) => {
                const hasGap = (this.chance() <= this.dificulty && this.validateWord(word)) ? true : false;
				return { text: word, gap: hasGap };
			});
            return lineWithData
		});

        return lyricsWithData
	}

	private validateWord(word: string) {
        const forbiddenStarts = ["(","[","¡",'"',"'"]
        const forbiddenEnds = ["?","!",",",")",":",";","]", '"', "'"]
        let isWordValid = true;

        forbiddenStarts.forEach(specialChar => {
            if(word.startsWith(specialChar)){
                isWordValid = false;
            }
        })

        forbiddenEnds.forEach(specialChar => {
            if(word.endsWith(specialChar)){
                isWordValid = false;
            }
        })

		return isWordValid && word.trim();
	}

	public chance() {
		return Math.random() * 100;;
	}

	public get songLyrics(): string {
		return this._songLyrics;
	}

	public get dificulty(): number {
		return this._dificulty;
	}

	public get formattedSong(): any {
		return this._formattedSong;
	}

	public get songTitle(): string {
		return this._songTitle;
	}

	public get artist(): string {
		return this._artist;
	}
}
