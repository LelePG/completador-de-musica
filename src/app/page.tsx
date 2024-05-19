"use client";
import { useCallback, useState } from "react";
import Button from "@/components/template/Button";
import SongCard from "@/components/home/SongCard";
import SearchInput from "@/components/template/SearchInput";
import language from "@/lang/ptbr";
import Footer from "@/components/home/Footer";
import ApiService from "@/model/ApiService";

export default function InitialPage() {
	const [title, setTitle] = useState("heroes");
	const [artist, setArtist] = useState("david");
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

	return (
		<div className="flex justify-center p-10 pt-20 ">
			<div className="text-xl bg-gray-100 p-8 rounded-lg shadow-2xl shadow-gray-500 border-blue-500 border-2">
				<h1 className="text-4xl font-bold my-5 text-center">{language.textMainTitle}</h1>
				<div className="flex flex-col flex-wrap my-4 min-w-max">
					<SearchInput value={title} textLabel={language.textSongTitle} callback={setTitle} defaultText="Heroes" />
					<SearchInput value={artist} textLabel={language.textSongAuthor} callback={setArtist} defaultText="David Bowie" />
					<div className="flex align-center gap-3 my-3">
						<label>{language.textDifficulty} </label>
						<input
							type="range"
							name="difficulty"
							min="10"
							max="90"
							value={difficultySlider}
							step="5"
							className="bg-red-300 text-yellow-400"
							onChange={(e) => setDifficultySlider(parseInt(e.target.value))}
						/>
						<label className="font-semibold">{difficultySlider}</label>
					</div>
				</div>
				<Button text="Pesquisar" callback={search} color="bg-blue-500 my-3 w-full" />
				{error && <p>{error}</p>}
			</div>
			<ul className="flex  flex-wrap justify-center">
				{foundSongs.map((song) => {
					return <SongCard song={song} difficulty={difficultySlider} key={song.id} />;
				})}
			</ul>
			<Footer text={language.textDoneBy} />
		</div>
	);
}
