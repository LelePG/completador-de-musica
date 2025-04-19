import Image from "next/image";
import { Link } from "@i18n/navigation";

interface SongCardProps {
	song: {
		title: string;
		artist: string;
		url: string; //TODO: Change to URL type
		id: number;
		albumArt: string;
	};
	difficulty: number;
}

export default function SongCard({ song, difficulty }: SongCardProps) {
	const songURL = `/song/${song.id}?difficulty=${difficulty ?? 15}`;

	return (
		<li className="md:w-48 md:h-48 w-32 h-32 m-2 rounded-md border-3 border-blue-800 shadow-md shadow-gray-100 bg-neutral-100 hover:bg-neutral-200 relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110">
			{song.albumArt ? (
				<Image
					loader={() => song.albumArt}
					src="album"
					alt="album art"
					width={210}
					height={210}
					className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
				/>
			) : (
				<div className="flex items-center justify-center w-full h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-music-icon lucide-music p-8 text-gray-600">
						<path d="M9 18V5l12-2v13" />
						<circle cx="6" cy="18" r="3" />
						<circle cx="18" cy="16" r="3" />
					</svg>
				</div>
			)}
			<Link href={songURL} className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center overflow-clip">
				<span className="text-sm md:text-xl max-w-fit text-center break-words text-white relative p-2 w-full">
					{song.title} by {song.artist}
				</span>
			</Link>
		</li>
	);
}
