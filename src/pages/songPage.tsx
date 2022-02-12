import Button from "../components/Button";
import Song from "../components/Song";
import getLyrics from "genius-lyrics-api/lib/getLyrics";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import language from "../lang/ptbr";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			title: context.query?.title,
			dificulty: context.query?.dificulty,
			lyrics: await getLyrics(`https://genius.com/${context.query?.path}`),
		},
	};
};

export default function songPage(props) {
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

			<footer className="fixed bottom-3 w-min h-25 flex justify-center">
				<Button text={language.textCorrect} callback={callbackCorrect} color="bg-red-300" />
				<Button text={language.textCleanAll} callback={callbackClean} color="bg-yellow-300" />
				<Button text={language.textShowAll} callback={callbackShow} color="bg-indigo-200" />
				<Button text={language.textHideAll} callback={callbackHide} color="bg-green-300" />
				<Button text={language.textReload} callback={callbackReload} color="bg-pink-300" />
				<Button text={language.textGoBack} callback={() => router.push("/")} color="bg-blue-300" />
			</footer>
		</main>
	);
}
