import Link from "next/link";
import { Github } from "./Icons";

export default function GithubLink() {
	return (
		<Link
			href="https://github.com/LelePG/completador-de-musica"
			className={`px-8  m-2 text-gray-50 font-semibold 
                text-2xl rounded-md shadow-md hover:bg-zinc-700 h-16
                flex flex-col justify-center items-center
                bg-stone-900`}
			target="_blank"
			rel="noreferrer">
			{Github({ size: 40 })}
		</Link>
	);
}
