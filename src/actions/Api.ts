"use server";
import { searchSong as searchSongAPI, getLyrics } from "genius-lyrics-api";

const options = (title: string, artist: string) => {
	return {
		apiKey: process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN,
		title,
		artist,
	};
};

export async function searchSong(title: string, artist: string) {
	return searchSongAPI(options(title, artist));
}

export async function getSongLyrics(title: string, artist: string) {
	return await getLyrics(options(title, artist));
}
