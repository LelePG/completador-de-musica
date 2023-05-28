interface songProps {
	songTitle: string;
	songArtist: string;
	songLyrics: string;
	dificulty: number;
}

import Gap from "./Gap";
import SongModel from "../model/SongModel";
import { useEffect, useRef } from "react";

export default function Song(props: songProps) {
	const songLyrics = new SongModel(props.songTitle, props.songLyrics, props.songArtist, props.dificulty);
	const focusRef = useRef([]);
	function chooseView(word, index: number, lineIndex: number) {
		const gapView = <Gap gapWord={word.text} key={word.text + index + lineIndex} focusRef={focusRef} />;
		const wordView = <span key={word.text + index + lineIndex}>{word.text + " "}</span>;
		
		return word.gap ? gapView : wordView;
	}
	
	const allLines = songLyrics.formattedSong?.map((line, lineIndex) => {
		const lineItems = line.map((word, index) => chooseView(word, index, lineIndex));
		return (
			<div key={lineIndex} className="flex flex-wrap whitespace-pre my-3">
				{lineItems}
			</div>
		);
	});

	return (
		<section className="flex flex-col flex-wrap border-black border-4 p-4 shadow-2xl rounded-md w-3/5 bg-neutral-100">
			<h1 className="text-xl font-bold place-self-center mb-4">{songLyrics.songTitle}</h1>
			<h2 className="text-md font-bold place-self-center mb-4">{songLyrics.artist}</h2>
			{allLines}
		</section>
	);
}
