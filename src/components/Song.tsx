import Gap from "./Gap";
import SongModel from "../model/SongModel";
import { useRef } from "react";
interface SongProps {
	songTitle: string;
	songArtist: string;
	songLyrics: string;
	difficulty: number;
}

export default function Song({ songTitle, songArtist, songLyrics, difficulty }: SongProps) {
	const song = new SongModel(songTitle, songLyrics, songArtist, difficulty);
	const focusRef = useRef([]);

	function chooseView(word, index: number, lineIndex: number) {
		const gapView = <Gap gapWord={word.text} key={word.text + index + lineIndex} focusRef={focusRef.current} />;
		const wordView = <span key={word.text + index + lineIndex}>{word.text + " "}</span>;

		return word.gap ? gapView : wordView;
	}

	const allLines = song.formattedSong?.map((line, lineIndex) => {
		const wordsInLine = line.map((word, index) => chooseView(word, index, lineIndex));
		return (
			<div key={lineIndex} className="flex flex-wrap whitespace-pre my-3">
				{wordsInLine}
			</div>
		);
	});

	return (
		<section className="flex flex-col flex-wrap border-black border-4 p-4 shadow-2xl rounded-md w-3/5 bg-neutral-100">
			<h1 className="text-xl font-bold place-self-center mb-4">{song.songTitle}</h1>
			<h2 className="text-md font-bold place-self-center mb-4">{song.artist}</h2>
			{allLines}
		</section>
	);
}
