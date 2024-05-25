"use client";
import { useState } from "react";
import Button from "@/components/template/Button";
import SongCard from "@/components/home/SongCard";
import SearchInput from "@/components/home/SearchInput";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";
import { searchSong } from "@/actions/Api";

export default function InitialPage(props: { params: { locale: string } }) {
	const [title, setTitle] = useState("heroes");
	const [artist, setArtist] = useState("david");
	const [difficultySlider, setDifficultySlider] = useState(10);
	const [foundSongs, setFoundSongs] = useState([]);
	const { addError } = useErrorMessage();
	const locale = props.params.locale;
	const t = useTranslations();

	const search = async () => {
		try {
			const results = await searchSong(title, artist);
			setFoundSongs(results);
		} catch (e) {
			if (e.toString().includes("title")) {
				addError(new Error(t("errors.songTitleNotInformed")));
			} else if (e.toString().includes("artist")) {
				addError(new Error(t("errors.songAuthorNotInformed")));
			} else {
				addError(new Error(t("errors.unknownProblem")));
			}
			setFoundSongs([]);
		}
	};

	return (
		<div className="flex flex-col xl:flex-row justify-center p-5 md:p-10 xl:p-20">
			<div className="text-md md:text-xl bg-gray-100 p-8 rounded-lg shadow-2xl shadow-gray-500 border-blue-500 border-2 w-full xl:w-1/3 mb-2 md:mb-4 self-start">
				<h1 className="text-2xl md:text-4xl font-bold my-2 md:my-5 text-center">{t("homePage.searchTitle")}</h1>
				<div className="flex flex-col flex-wrap my-4 ">
					<SearchInput value={title} textLabel={`${t("homePage.songTitle")}:`} callback={setTitle} defaultText="Heroes" />
					<SearchInput value={artist} textLabel={`${t("homePage.songAuthor")}:`} callback={setArtist} defaultText="David Bowie" />
					<div className="flex flex-col md:flex-row align-center gap-3 my-3">
						<label>{`${t("homePage.songDifficulty")}:`} </label>
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
						<label className="font-semibold text-center">{difficultySlider}</label>
					</div>
				</div>
				<Button text="Pesquisar" callback={search} color="bg-blue-500" className="w-full h-16 px-6" />
			</div>
			<ul className="flex  flex-wrap justify-center">
				{foundSongs.map((song) => {
					return <SongCard song={song} difficulty={difficultySlider} key={song.id} songURL={`/${locale}/song`} />;
				})}
			</ul>
		</div>
	);
}
