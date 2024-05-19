interface FormattedGap {
	text: string;
	gap: boolean;
}

export default class SongLyricsModel {
	private _songLyrics: string;
	private _difficulty: number;
	private _formattedSong: FormattedGap[][];

	constructor(songLyrics: string, difficulty: number) {
		this._songLyrics = songLyrics;
		this._difficulty = difficulty;
		this._formattedSong = this.formatter(songLyrics);
	}

	private hasBrackets(text) {
		return text.startsWith("[") || text.endsWith("]");
	}

	private hasCurlyBraces(text) {
		return text.startsWith("{") || text.endsWith("}");
	}

	private formatter(songLyrics: string): FormattedGap[][] {
		const lineIsValid = (line) => (this.hasBrackets(line) || this.hasCurlyBraces(line) || line.length <= 2 ? false : true);

		const validLines = songLyrics?.split("\n").filter((line) => lineIsValid(line));

		let gapIndex = 0;
		const linesWithGaps = validLines?.map((line) => {
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
			const wordsWithGaps = words.map((word, i) => {
				const isGapped = putGapsIn.indexOf(i) >= 0;
				return { text: word, gap: isGapped, gapIndex: isGapped ? gapIndex++ : null };
			});
			return wordsWithGaps;
		});

		return linesWithGaps;
	}

	private wordIsValid(word: string): string {
		const forbiddenStarts = ["(", "[", "¡", '"', "'", "¿"];
		const forbiddenEnds = ["?", "!", ",", ")", ":", ";", "]", '"', "'", "..."];

		const startsWithForbidden = forbiddenStarts.some((char) => word.startsWith(char));
		const endsWithForbidden = forbiddenEnds.some((char) => word.endsWith(char));

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
}
