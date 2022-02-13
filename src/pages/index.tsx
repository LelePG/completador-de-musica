import searchSong from "genius-lyrics-api/lib/searchSong";
import { useState } from "react";
import Button from "../components/Button";
import SongCard from "../components/SongCard";
import SearchInput from "../components/SearchInput";
import Options from "../model/Options";
import language from "../lang/ptbr";

export default function InitialPage() {
	const [options, setOptions] = useState(new Options());
	const [dificultySlider, setDificultySlider] = useState(10);
	const [foundSongs, setFoundSongs] = useState([]);

	const updateTitle = (text: string) => setOptions(options.changeTitle(text));
	const updateArtist = (text: string) => setOptions(options.changeArtist(text));
	const serach = () =>
		searchSong(options.formatted())
			.then((musicas) => setFoundSongs(musicas))
			.catch((e) => setFoundSongs([<p>{language.textProblemsFound}</p>, <p>{String(e).includes("title") ? language.textNoTitle : language.textNoAuthor}</p>]));

	function showResults() {
		const serachResults = foundSongs.map((song) => {
			return <SongCard song={song} dificulty={dificultySlider} />;
		});
		return <ul className="flex flex-col justify-center items-center w-full">{serachResults}</ul>;
	}

	return (
		<div className="flex flex-col justify-center items-center text-lg mt-10">
			<h1 className="text-2xl font-bold m-5">{language.textMainTitle}</h1>
			<div className="flex flex-wrap mb-5">
				<SearchInput value={options.title} textLabel={language.textSongTitle} callback={updateTitle} defaultText="Heroes" />
				<SearchInput value={options.artist} textLabel={language.textSongAuthor} callback={updateArtist} defaultText="David Bowie" />
			</div>
			<div className="flex align-center gap-3 my-3">
				<label>{language.textDificulty} </label>
				<input type="range" name="dificulty" min="10" max="40"
					value={dificultySlider} step="5" className="bg-red-300"
					onChange={(e) => setDificultySlider(parseInt(e.target.value))}/>
			</div>
			<Button text="Pesquisar" callback={serach} color="bg-blue-500 my-3" />
			{showResults()}
		</div>
	);
}
