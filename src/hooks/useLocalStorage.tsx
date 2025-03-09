type ItemType = {
	title: string;
	artist: string;
	id: number | string;
	difficulty: number;
};

export default function useLocalStorage() {
	const key = "song_info";

	const getFromLS = () => {
		if (typeof window !== "undefined") {
			const item = window.localStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			}
		}
		return null;
	};

	const setToLS = (value: ItemType) => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	};

	const removeFromLS = () => {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(key);
		}
	};

	return { getFromLS, setToLS, removeFromLS };
}
