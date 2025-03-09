"use client";
import { useState } from "react";
import SongCard from "@/components/home/SongCard";
import { useTranslations } from "next-intl";
import SearchForm from "@/components/home/SearchForm";

export default function InitialPage() {
	const [difficultySlider, setDifficultySlider] = useState(10);
	const [foundSongs, setFoundSongs] = useState([]);
	const t = useTranslations();

	return (
		<div className="flex flex-col xl:flex-row justify-center p-5 md:p-10 xl:p-20">
			<SearchForm setSongs={setFoundSongs}>
				<div className="flex flex-col md:flex-row align-center gap-3 my-3">
					<label>{`${t("homePage.songDifficulty")}:`} </label>
					<input
						type="range"
						name="difficulty"
						min="10"
						max="90"
						value={difficultySlider}
						step="5"
						onChange={(e) => setDifficultySlider(parseInt(e.target.value))}
					/>
					<label className="font-semibold text-center">{difficultySlider}</label>
				</div>
			</SearchForm>
			<ul className="flex  flex-wrap justify-center">
				{foundSongs.map((song) => {
					return <SongCard song={song} difficulty={difficultySlider} key={song.id} />;
				})}
			</ul>
		</div>
	);
}
