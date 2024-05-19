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
	const { set } = useLocalStorage();

	const setSong = () => {
		const songTitleAndAuthor = String(song?.title).split("by");
		const title = songTitleAndAuthor[0]?.trim().toUpperCase();
		const artist = songTitleAndAuthor[1]?.trim().toUpperCase();

		set({
			title,
			artist,
			difficulty,
		});
	};
	return (
		<li className="w-48 h-48 m-2 rounded-md border-3 border-blue-800 shadow-md shadow-gray-100 bg-neutral-100 hover:bg-neutral-200 relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110">
			<Image
				loader={() => song.albumArt}
				src="album"
				alt="album art"
				width={210}
				height={210}
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
			/>
			<Link onClick={() => setSong()} href={songURL} className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center overflow-clip">
				<span className="text-xl max-w-fit text-center break-words text-white relative p-2 w-full">{song.title}</span>
			</Link>
		</li>
	);
}
