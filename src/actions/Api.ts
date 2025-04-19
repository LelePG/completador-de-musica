"use server";
import { PartialSongDTO } from "@/types/SongDTO";
import { MusixMatchAPI } from "musicxmatch-api";

const musixMatchAPI = new MusixMatchAPI();

export async function searchSong(query: string) {
	if (!query.length) {
		throw new Error("empty query");
	}

	const tracks: any = await musixMatchAPI.searchTracks({
		query: query,
		page: 1,
	});

	const trackList = tracks.message.body.track_list.slice(0, 10);

	return trackList.map(({ track }: any) => {
		return {
			title: track.track_name,
			artist: track.artist_name,
			url: track.track_share_url,
			id: track.track_id,
			albumArt: track.album_coverart_500x500,
		};
	});
}

export async function getSongLyricsAndInfo(id: string): Promise<PartialSongDTO> {
	const trackInfo: any = await musixMatchAPI.getTrack(id);
	const track: any = await musixMatchAPI.getTrackLyrics(id);

	const { artist_name, track_name } = trackInfo.message.body.track;
	const { lyrics_body } = track.message.body.lyrics;

	return {
		title: track_name,
		artist: artist_name,
		lyrics: lyrics_body,
	};
}
