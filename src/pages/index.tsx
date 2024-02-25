import { useCallback, useState } from "react";
import searchSong from "genius-lyrics-api/lib/searchSong";
import Button from "../components/Button";
import SongCard from "../components/SongCard";
import SearchInput from "../components/SearchInput";
import Options from "../model/Options";
import language from "../lang/ptbr";
import Footer from "../components/Footer";

export default function InitialPage() {
    const [options, setOptions] = useState(new Options());
    const [difficultySlider, setDifficultySlider] = useState(10);
    const [foundSongs, setFoundSongs] = useState([]);
    const [error, setError] = useState(null);

    const updateTitle = useCallback((text: string) => setOptions(options.changeTitle(text)), [options]);
    const updateArtist = useCallback((text: string) => setOptions(options.changeArtist(text)), [options]);

    const search = useCallback(() => {
        searchSong(options.formatted())
            .then((songs) => setFoundSongs(songs))
            .catch((e) => {
                let errorResponse;
                if(String(e).includes("title")){
                    errorResponse = language.textNoTitle
                } else if (String(e).includes("author")){
                    errorResponse = language.textNoAuthor
                } else if (String(e).includes("apikey")){
                    errorResponse = language.textNoAPIKey
                } else{
                    errorResponse = language.textOtherError
                }
                setError(errorResponse);
				setFoundSongs([]);
            });
    }, [options]);

    const searchResults = foundSongs.map((song) => {
        if (song.type === "p") {
            return song;
        } else {
            return <SongCard song={song} difficulty={difficultySlider} key={song.id} />;
        }
    });

    return (
        <div className="flex flex-col justify-center items-center text-lg mt-10">
            <h1 className="text-2xl font-bold m-5">{language.textMainTitle}</h1>
            <div className="flex flex-wrap mb-5">
                <SearchInput value={options.title} textLabel={language.textSongTitle} callback={updateTitle} defaultText="Heroes" />
                <SearchInput value={options.artist} textLabel={language.textSongAuthor} callback={updateArtist} defaultText="David Bowie" />
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
            <Footer text={language.textDoneBy}/>
        </div>
    );
}