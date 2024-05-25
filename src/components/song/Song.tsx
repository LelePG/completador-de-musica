import SongModel from "@/model/SongModel";
import { InputContextProvider } from "@/contexts/InputContext";
import SongLine from "./SongLine";

interface SongProps {
	title: string;
	artist: string;
	lyrics: string;
	difficulty: number;
}

export default function Song({ title, artist, lyrics, difficulty }: SongProps) {
	const song = new SongModel(lyrics, difficulty);

	const allLines = song.formattedSong?.map((line, lineIndex) => {
		return <SongLine line={line} lineIndex={lineIndex} key={lineIndex} />;
	});

	return (
		<section className="flex flex-col flex-wrap border-black border-2 md:border-4 p-5 md:p-10 shadow-2xl rounded-md md:w-4/5 xl:w-3/5 m-3 bg-neutral-100">
			<h1 className="text-xl md:text-4xl font-bold place-self-center mb-2 md:mb-4">{title}</h1>
			<h2 className="text-lg md:text-3xl font-bold place-self-center mb-2 md:mb-4">{artist}</h2>
			<InputContextProvider>{allLines}</InputContextProvider>
		</section>
	);
}
