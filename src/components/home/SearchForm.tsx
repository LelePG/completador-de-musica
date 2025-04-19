import { useState } from "react";
import Button from "../template/Button";
import SearchInput from "./SearchInput";
import { searchSong } from "@/actions/Api";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";

interface SearchFormProps {
	setSongs: (p: any) => void;
	query: string;
	setQuery: (p: string) => void;
	difficultySlider: number;
	setDifficultySlider: (p: number) => void;
}

export default function SearchForm({ setSongs, query, setQuery, difficultySlider, setDifficultySlider }: SearchFormProps) {
	const { addError } = useErrorMessage();
	const t = useTranslations();

	const search = async () => {
		try {
			const results = await searchSong(query);
			setSongs(results);
		} catch (e) {
			if (e.toString().includes("empty query")) {
				addError(new Error(t("errors.emptyQuery")));
			} else {
				addError(new Error(t("errors.unknownProblem")));
			}
			setSongs([]);
		}
	};

	return (
		<div className="text-md md:text-xl bg-gray-100 p-8 rounded-lg shadow-2xl shadow-gray-500 border-blue-500 border-2 w-full xl:w-1/3 mb-2 md:mb-4 self-start">
			<h1 className="text-2xl md:text-4xl font-bold my-2 md:my-5 text-center">{t("homePage.searchTitle")}</h1>
			<div className="flex flex-col flex-wrap my-4 ">
				<SearchInput value={query} textLabel={`${t("homePage.query")}:`} callback={setQuery} defaultText="Heroes" />
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
			</div>
			<Button text="Pesquisar" callback={search} className="bg-blue-500 w-full h-16 px-6" />
		</div>
	);
}
