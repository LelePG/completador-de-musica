interface FormattedGap {
	text: string;
	gap: boolean;
}

export default class SongLyricsModel {
	private _songLyrics: string;
	private _artist: string;
	private _difficulty: number;
	private _songTitle: string;
	private _formattedSong: FormattedGap[][];

	constructor(songTitle: string, songLyrics: string, artist: string, difficulty: number) {
		this._songTitle = songTitle;
		this._songLyrics = songLyrics;
		this._artist = artist;
		this._difficulty = difficulty;
		this._formattedSong = this.formatter(songLyrics);
	}

	private hasBrackets(text) {
		return text.startsWith("[") || text.endsWith("]");
	}

	private hasCurlyBraces(text) {
		return text.startsWith("{") || text.endsWith("}");
	}

	private formatter(songLyrics: string):FormattedGap[][] {
		const lineIsValid = (line) => (this.hasBrackets(line) || this.hasCurlyBraces(line) || line.length <= 2 ? false : true);

		const validLines = songLyrics?.split("\n").filter((line) => lineIsValid(line));

		const linesWithGaps = validLines.map((line) => {
			const words = line.split(" ");
			const putGapsIn = [];
			if (this.chance() <= this.difficulty) {
				const numberOfGaps = this.randomNumber(words.length / 4) ?? 1;
				let tries = 0;
				do {
					const randomI = this.randomIndex(words.length);
					const randomWord = words[randomI];
					if (this.wordIsValid(randomWord) && putGapsIn.indexOf(randomI) < 0) {
						putGapsIn.push(randomI);
						tries++;
					}
				} while (putGapsIn.length <= numberOfGaps && tries <= 10);
			}
			const wordsWithGaps = words.map((word, i) => ({ text: word, gap: putGapsIn.indexOf(i) >= 0 }));
			return wordsWithGaps;
		});

		return linesWithGaps;
	}

    private wordIsValid(word: string): string {
        const forbiddenStarts = ["(", "[", "¡", '"', "'", "¿"];
        const forbiddenEnds = ["?", "!", ",", ")", ":", ";", "]", '"', "'", "..."];

        const startsWithForbidden = forbiddenStarts.some(char => word.startsWith(char));
        const endsWithForbidden = forbiddenEnds.some(char => word.endsWith(char));

        return !(startsWithForbidden || endsWithForbidden) && word.trim();
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

	public get difficulty(): number {
		return this._difficulty;
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
