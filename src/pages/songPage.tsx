import Button from "../components/Button";
import Song from "../components/Song";
import getLyrics from "genius-lyrics-api/lib/getLyrics";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import language from "../lang/ptbr";
import { Github } from "../components/Icons";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			songTitle: context.query?.title,
			dificulty: context.query?.dificulty,
			lyrics: await getLyrics(`https://genius.com/${context.query?.path}`),
		},
	};
};

export default function SongPage(props) {
	const router = useRouter();

	const songTitleAndAuthor = String(props.songTitle).split("by");
	const songTitle = songTitleAndAuthor.shift()?.trim().toUpperCase();
	const artist = songTitleAndAuthor.pop()?.trim().toUpperCase();

	const callbackCorrect = () => window.dispatchEvent(new CustomEvent("correct"));
	const callbackClean = () => window.dispatchEvent(new CustomEvent("clean"));
	const callbackShow = () => window.dispatchEvent(new CustomEvent("open"));
	const callbackHide = () => window.dispatchEvent(new CustomEvent("close"));
	const callbackReload = () => window.location.reload();

	return (
		<main className="flex justify-center m-5 pb-16">
			<Song songTitle={songTitle} songArtist={artist} songLyrics={props.lyrics} dificulty={parseInt(String(props.dificulty))} />
			<a href="https://github.com/LelePG/completador-de-musica" className="ml-8 my-3 sticky top-3 right-10" target="_blank" rel="noreferrer">
            {Github(40)}
            </a>
			<section className="fixed bottom-3 w-screen h-25 flex justify-center flex-wrap ">
				<Button text={language.textCorrect} callback={callbackCorrect} color="bg-red-300" />
				<Button text={language.textCleanAll} callback={callbackClean} color="bg-yellow-300" />
				<Button text={language.textShowAll} callback={callbackShow} color="bg-indigo-200" />
				<Button text={language.textHideAll} callback={callbackHide} color="bg-green-300" />
				<Button text={language.textReload} callback={callbackReload} color="bg-pink-300" />
				<Button text={language.textGoBack} callback={() => router.push("/")} color="bg-blue-300" />
			</section>
		</main>
	);
}
