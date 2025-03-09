import Image from "next/image";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
interface SongCardProps {
	song: {
		title: string;
		url: string;
		id: number;
		albumArt: string;
	};
	difficulty: number;
	songURL: string;
}

export default function SongCard({ song, difficulty, songURL }: SongCardProps) {
	const { setToLS } = useLocalStorage();

	const setSong = () => {
		const songTitleAndAuthor = String(song?.title)
			.split("by")
			.map((text) => text.trim().toUpperCase());

		setToLS({
			title: songTitleAndAuthor[0],
			artist: songTitleAndAuthor[1],
			id: song.id,
			difficulty,
		});
	};
	return (
		<li className="md:w-48 md:h-48 w-32 h-32 m-2 rounded-md border-3 border-blue-800 shadow-md shadow-gray-100 bg-neutral-100 hover:bg-neutral-200 relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110">
			<Image
				loader={() => song.albumArt}
				src="album"
				alt="album art"
				width={210}
				height={210}
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
			/>
			<Link onClick={() => setSong()} href={songURL} className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center overflow-clip">
				<span className="text-sm md:text-xl max-w-fit text-center break-words text-white relative p-2 w-full">{song.title}</span>
			</Link>
		</li>
	);
}
