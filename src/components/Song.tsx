import Gap from "./Gap";
import SongModel from "../model/SongModel";
import { useRef } from "react";
interface SongProps {
	title: string;
	artist: string;
	lyrics: string;
	difficulty: number;
}

export default function Song({ title, artist, lyrics, difficulty }: SongProps) {
	const song = new SongModel(lyrics, difficulty);
	const focusRef = useRef([]);

	function chooseView(word, index: number, lineIndex: number) {
		const gapView = <Gap gapWord={word.text} key={word.text + index + lineIndex} focusRef={focusRef.current} />;
		const wordView = <span key={word.text + index + lineIndex}>{word.text + " "}</span>;

		return word.gap ? gapView : wordView;
	}

	const allLines = song.formattedSong?.map((line, lineIndex) => {
		const wordsInLine = line.map((word, index) => chooseView(word, index, lineIndex));
		return (
			<div key={lineIndex} className="flex flex-wrap whitespace-pre my-3 text-xl">
				{wordsInLine}
			</div>
		);
	});

	return (
		<section className="flex flex-col flex-wrap border-black border-4 p-10 shadow-2xl rounded-md w-3/5 bg-neutral-100">
			<h1 className="text-3xl font-bold place-self-center mb-4">{title}</h1>
			<h2 className="text-2xl font-bold place-self-center mb-4">{artist}</h2>
			{allLines}
		</section>
	);
}
