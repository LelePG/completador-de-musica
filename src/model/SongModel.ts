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

		const linesWithGaps = validLines.map((line) => {
			const words = line.split(" ");
			const putGapsIn = [];
			if (this.chance() <= this.dificulty) {
				const numberOfGaps = this.randomNumber(words.length / 4) ?? 1;
				do {
					const randomI = this.randomIndex(words.length);
					const randomWord = words[randomI];
					if (this.wordIsValid(randomWord) && putGapsIn.indexOf(randomI) < 0) {
						putGapsIn.push(randomI);
					}
				} while (putGapsIn.length <= numberOfGaps);
			}
			const wordsWithGaps = words.map((word, i) => ({ text: word, gap: putGapsIn.indexOf(i) >= 0 }));
			return wordsWithGaps;
		});

		return linesWithGaps;
	}

	private wordIsValid(word: string) {
		const forbiddenStarts = ["(", "[", "¡", '"', "'", "¿"];
		const forbiddenEnds = ["?", "!", ",", ")", ":", ";", "]", '"', "'"];
		let isWordValid = true;

		forbiddenStarts.forEach((specialChar) => {
			if (word.startsWith(specialChar)) {
				isWordValid = false;
			}
		});

		forbiddenEnds.forEach((specialChar) => {
			if (word.endsWith(specialChar)) {
				isWordValid = false;
			}
		});

		return isWordValid && word.trim();
	}

	public chance() {
		return Math.random() * 100;
	}

	private randomNumber(n) {
		return Math.floor(Math.random() * n);
	}

	private randomIndex(n) {
		return this.randomNumber(n);
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
