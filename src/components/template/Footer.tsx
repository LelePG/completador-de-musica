import { Github } from "@/components/template/Icons";

interface FooterProps {
	text: string;
}

export default function Footer({ text }: FooterProps) {
	return (
		<footer className="flex bg-blue-500 w-full py-2 justify-center items-center h-8 md:h-12">
			<span className="text-md md:text-lg font-semibold text-white flex-1 text-center">{text}</span>
			<a href="https://github.com/LelePG/completador-de-musica" className="mr-4" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				{Github({ size: 25 })}
			</a>
		</footer>
	);
}
