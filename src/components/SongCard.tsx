import Image from "next/image";
import { useRouter } from "next/router";

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
	const router = useRouter();

	const routeObject = {
		pathname: "/songPage",
		query: {
			title: song.title,
			path: song.url.split("/").pop(),
			difficulty,
		},
	};

	const changePath = (e) => {
		e.preventDefault();
		router.push(routeObject);
	};

	return (
		<li className=" w-52 p-3 m-2 rounded-md border-2 border-black bg-neutral-100 hover:bg-neutral-200 ">
			<a onClick={changePath} className="flex flex-col gap-1 items-center m-1 ">
				<Image loader={() => song.albumArt} src="album" alt="album art" width={150} height={150} />
				<span className="text-xl text-center">{song.title}</span>
			</a>
		</li>
	);
}
