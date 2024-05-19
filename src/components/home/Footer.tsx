import { Github } from "./../template/Icons";

interface FooterProps {
	text: string;
}

export default function Footer({ text }: FooterProps) {
	return (
		<footer className="flex fixed bottom-0 bg-blue-500 w-full py-2 justify-center items-center ml-auto">
			<span className="text-lg font-semibold text-white flex-1 text-center">{text}</span>
			<a href="https://github.com/LelePG/completador-de-musica" className="mx-3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				{Github({ size: 25 })}
			</a>
		</footer>
	);
}
