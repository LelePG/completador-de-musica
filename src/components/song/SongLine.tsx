import SongModel, { FormattedWords } from "@/model/SongModel";
import Gap from "./Gap";

interface SongLineProps {
	line: FormattedWords[];
	lineIndex: number;
}

export default function SongLine({ line, lineIndex }: SongLineProps) {
	const formattedWords = line.map((word: FormattedWords, index: number) => {
		const gapView = <Gap gapWord={word.text} key={word.text + index + lineIndex} gapIndex={word.gapIndex} />;
		const wordView = <span key={word.text + index + lineIndex}>{word.text + " "}</span>;

		return word.gap ? gapView : wordView;
	});

	return <div className="flex flex-wrap whitespace-pre my-2 md:my-3 text-xl md:text-2xl">{formattedWords}</div>;
}
