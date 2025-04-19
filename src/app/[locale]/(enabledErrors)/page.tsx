"use client";
import { useState } from "react";
import SongCard from "@/components/home/SongCard";
import { useTranslations } from "next-intl";
import SearchForm from "@/components/home/SearchForm";

export default function InitialPage() {
	const [foundSongs, setFoundSongs] = useState([]);
	const [query, setQuery] = useState("");
	const [difficultySlider, setDifficultySlider] = useState(10);

	return (
		<div className="flex flex-col xl:flex-row justify-center p-5 md:p-10 xl:p-20">
			<SearchForm setSongs={setFoundSongs} difficultySlider={difficultySlider} setDifficultySlider={setDifficultySlider} query={query} setQuery={setQuery} />

			<ul className="flex  flex-wrap justify-center">
				{foundSongs.map((song) => {
					return <SongCard song={song} key={song.id} difficulty={difficultySlider} />;
				})}
			</ul>
		</div>
	);
}
