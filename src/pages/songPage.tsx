import Button from "../components/Button";
import Song from "../components/Song";
import getLyrics from "genius-lyrics-api/lib/getLyrics";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import language from "../lang/ptbr";
import { Github } from "../components/Icons";
import { useCallback } from "react";

interface SongPageProps {
	songTitle: string;
	difficulty: string;
	lyrics: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let lyrics = '';
    try {
        lyrics = await getLyrics(`https://genius.com/${context.query?.path}`);
    } catch (error) {
        console.error('Failed to get lyrics:', error);
    }

    return {
        props: {
            songTitle: context.query?.title,
            difficulty: context.query?.difficulty,
            lyrics,
        },
		
    };
};

export default function SongPage({ songTitle, difficulty, lyrics }:SongPageProps) {
	const router = useRouter();

	const songTitleAndAuthor = String(songTitle).split("by");
	const title = songTitleAndAuthor.shift()?.trim().toUpperCase();
	const artist = songTitleAndAuthor.pop()?.trim().toUpperCase();

	const dispatchEvent = useCallback((eventName) => {
        window.dispatchEvent(new CustomEvent(eventName));
    }, []);

    const callbackCorrect = () => dispatchEvent("correct");
    const callbackClean = () => dispatchEvent("clean");
    const callbackShow = () => dispatchEvent("open");
    const callbackHide = () => dispatchEvent("close");
    const callbackReload = () => window.location.reload();
    const callbackGoBack = useCallback(() => router.push("/"), [router])

	return (
		<main className="flex justify-center m-5 pb-16">
			<Song songTitle={title} songArtist={artist} songLyrics={lyrics} difficulty={parseInt(String(difficulty))} />
			<a href="https://github.com/LelePG/completador-de-musica" className="ml-8 my-3 sticky top-3 right-10" target="_blank" rel="noreferrer">
            {Github({size:40})}
            </a>
			<section className="fixed bottom-3 w-screen h-25 flex justify-center flex-wrap ">
				<Button text={language.textCorrect} callback={callbackCorrect} color="bg-red-300" />
				<Button text={language.textCleanAll} callback={callbackClean} color="bg-yellow-300" />
				<Button text={language.textShowAll} callback={callbackShow} color="bg-indigo-200" />
				<Button text={language.textHideAll} callback={callbackHide} color="bg-green-300" />
				<Button text={language.textReload} callback={callbackReload} color="bg-pink-300" />
				<Button text={language.textGoBack} callback={callbackGoBack} color="bg-blue-300" />
			</section>
		</main>
	);
}
