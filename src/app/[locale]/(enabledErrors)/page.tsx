"use client";
import { useState } from "react";
import Button from "@/components/template/Button";
import SongCard from "@/components/home/SongCard";
import SearchInput from "@/components/template/SearchInput";
import Footer from "@/components/home/Footer";
import ApiService from "@/model/ApiService";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";

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
			const results = await ApiService.searchSong(title, artist);
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
		<div className="flex justify-center p-10 pt-20 ">
			<div className="text-xl bg-gray-100 p-8 rounded-lg shadow-2xl shadow-gray-500 border-blue-500 border-2">
				<h1 className="text-4xl font-bold my-5 text-center">{t("homePage.searchTitle")}</h1>
				<div className="flex flex-col flex-wrap my-4 min-w-max">
					<SearchInput value={title} textLabel={`${t("homePage.songTitle")}:`} callback={setTitle} defaultText="Heroes" />
					<SearchInput value={artist} textLabel={`${t("homePage.songAuthor")}:`} callback={setArtist} defaultText="David Bowie" />
					<div className="flex align-center gap-3 my-3">
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
						<label className="font-semibold">{difficultySlider}</label>
					</div>
				</div>
				<Button text="Pesquisar" callback={search} color="bg-blue-500 my-3 w-full" />
			</div>
			<ul className="flex  flex-wrap justify-center">
				{foundSongs.map((song) => {
					return <SongCard song={song} difficulty={difficultySlider} key={song.id} songURL={`/${locale}/song`} />;
				})}
			</ul>
			<Footer text={t("homePage.madeBy")} />
		</div>
	);
}
