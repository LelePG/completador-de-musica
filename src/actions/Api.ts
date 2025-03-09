"use server";
import { Client } from "genius-lyrics";

const client = new Client(process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN);

export async function searchSong(title: string, artist: string) {
	const songs = await client.songs.search(title, { sanitizeQuery: true });
	const formattedSongs = songs.map((song) => {
		return {
			title: song.title,
			artist: song.artist.name,
			url: song.url,
			id: song.id,
			albumArt: song.thumbnail,
		};
	});
	return formattedSongs;
}

export async function getSongLyrics(id: string) {
	const song = await client.songs.get(parseInt(id));
	return song.lyrics();
}
