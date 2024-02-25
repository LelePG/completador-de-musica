type ItemType = {
	title: string;
    artist: string;
	difficulty: number;
};

export default function useLocalStorage() {
	const key = "song_info";

	const get = () => {
		if (typeof window !== "undefined") {
			const item = window.localStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			}
		}
		return null;
	};

	const set = (value: ItemType) => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	};

	const remove = () => {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(key);
		}
	};

	return { get, set, remove };
}
