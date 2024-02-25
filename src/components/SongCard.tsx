import Image from "next/image";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
interface SongCardProps {
	song: {
		title: string;
		url: string;
		id: number;
		albumArt: string;
	};
	difficulty: number;
}

export default function SongCard({ song, difficulty }: SongCardProps) {
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
		<li className=" w-52 p-3 m-2 rounded-md border-2 border-black bg-neutral-100 hover:bg-neutral-200 ">
			<Link onClick={() => setSong()} href="/song" className="flex flex-col gap-1 items-center justify-center m-1 ">
				<Image loader={() => song.albumArt} src="album" alt="album art" width={150} height={150} />
				<span className="text-xl text-center break-words">{song.title}</span>
			</Link>
		</li>
	);
}
