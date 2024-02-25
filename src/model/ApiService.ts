import { searchSong, getLyrics } from "genius-lyrics-api-mod";

export default class ApiService {
	private static readonly _apiKey: string = process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN;
	private static readonly _optimizeQuery: boolean = true;

	static options = (title: string, artist: string) => {
		return {
			apiKey: ApiService._apiKey,
			title,
			artist,
			optimizeQuery: ApiService._optimizeQuery,
		};
	};

	static async searchSong(title: string, artist: string) {
		const array = await searchSong(ApiService.options(title, artist));
		return array;
	}

	static async getSongLyrics(title: string, artist: string) {
		const lyrics = await getLyrics(ApiService.options(title, artist), this.options(title, artist));
		return lyrics;
	}
}
