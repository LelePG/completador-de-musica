import { Github } from "./Icons";

interface FooterProps{
    text: string;
}

export default function Footer(props) {
	return (
		<footer className="flex fixed bottom-0 bg-blue-500 w-full p-2 justify-center ml-auto">
            <span className="text-sm font-semibold flex-1 text-center">
                {props.text}
                </span>
			<a href="https://github.com/LelePG/completador-de-musica" className="mx-3" target="_blank" rel="noreferrer">
            {Github(20)}
            </a>
		</footer>
	);
}
