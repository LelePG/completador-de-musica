const Check = (callback, tamanho) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			onClick={callback}
			className={`h-${tamanho} w-${tamanho}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 13l4 4L19 7"
			/>
		</svg>
	);
};

const MagGlass = (callback, tamanho) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			onClick={callback}
			className={`h-${tamanho} w-${tamanho}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	);
};

const Bulb = (callback, tamanho) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			onClick={callback}
			className={`h-${tamanho} w-${tamanho}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
			/>
		</svg>
	);
};

export { Check, MagGlass,Bulb };