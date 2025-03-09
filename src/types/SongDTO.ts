export type PartialSongDTO = {
	title: string;
	artist: string;
	lyrics: string;
};

export type SongDTO = PartialSongDTO & {
	difficulty: number;
};
