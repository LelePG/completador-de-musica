import { useRouter } from "next/router";

interface SongCardProps {
	song: {
		title: string;
		url: string;
		id: number;
		albumArt: string;
	};
	dificulty: number;
}

export default function SongCard(props: SongCardProps) {
	const router = useRouter();

	const routeObject = {
		pathname: "/songPage",
		query: {
			title: props.song.title,
			path: props.song.url.split("/").pop(),
			dificulty: props.dificulty,
		},
	};

	const changePath = (e) => {
		e.preventDefault();
		router.push(routeObject);
	};

	return (
		<li key={props.song.id} className="w-1/4  m-2 rounded-md border-2 border-black">
			<a onClick={(e) => changePath(e)} className="flex justify-evenly items-center h-full w-full bg-neutral-100  p-2 hover:bg-neutral-200">
				<img src={props.song.albumArt} className="w-20 rounded-sm" />
				<span className="ml-4">{props.song.title}</span>
			</a>
		</li>
	);
}
