"use client";
import { useCallback, useState } from "react";
import Button from "../components/Button";
import SongCard from "../components/SongCard";
import SearchInput from "../components/SearchInput";
import language from "../lang/ptbr";
import Footer from "../components/Footer";
import ApiService from "../model/ApiService";

export default function InitialPage() {
	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [difficultySlider, setDifficultySlider] = useState(10);
	const [foundSongs, setFoundSongs] = useState([]);
	const [error, setError] = useState(null);

	const search = async () => {
		try {
			const results = await ApiService.searchSong(title, artist);
			setFoundSongs(results);
		} catch (e) {
			// console.log(error.message);
			// setError(errorResponse);
			setFoundSongs([]);
		}
	};

	const searchResults = foundSongs.map((song) => {
		if (song.type === "p") {
			return song;
		} else {
			return <SongCard song={song} difficulty={difficultySlider} key={song.id} />;
		}
	});

	return (
		<div className="flex flex-col justify-center items-center text-lg">
			<h1 className="text-2xl font-bold m-5">{language.textMainTitle}</h1>
			<div className="flex flex-wrap mb-5">
				<SearchInput value={title} textLabel={language.textSongTitle} callback={setTitle} defaultText="Heroes" />
				<SearchInput value={artist} textLabel={language.textSongAuthor} callback={setArtist} defaultText="David Bowie" />
			</div>
			<div className="flex align-center gap-3 my-3">
				<label>{language.textDifficulty} </label>
				<input
					type="range"
					name="difficulty"
					min="10"
					max="90"
					value={difficultySlider}
					step="5"
					className="bg-red-300"
					onChange={(e) => setDifficultySlider(parseInt(e.target.value))}
				/>
			</div>
			<Button text="Pesquisar" callback={search} color="bg-blue-500 my-3" />
			{error && <p>{error}</p>}
			<ul className="flex w-3/4 flex-wrap justify-center">{searchResults}</ul>
			<Footer text={language.textDoneBy} />
		</div>
	);
}
