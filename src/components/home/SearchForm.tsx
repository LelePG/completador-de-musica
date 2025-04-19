import { useState } from "react";
import Button from "../template/Button";
import SearchInput from "./SearchInput";
import { searchSong } from "@/actions/Api";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";

interface SearchFormProps {
	setSongs: (p: any) => void;
	children: any;
}

export default function SearchForm({ setSongs, children }: SearchFormProps) {
	const [title, setTitle] = useState("");
	const { addError } = useErrorMessage();
	const t = useTranslations();

	const search = async () => {
		try {
			const results = await searchSong(title);
			setSongs(results);
		} catch (e) {
			if (e.toString().includes("empty title")) {
				addError(new Error(t("errors.songTitleNotInformed")));
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
				<SearchInput value={title} textLabel={`${t("homePage.songTitle")}:`} callback={setTitle} defaultText="Heroes" />
				{children}
			</div>
			<Button text="Pesquisar" callback={search} className="bg-blue-500 w-full h-16 px-6" />
		</div>
	);
}
