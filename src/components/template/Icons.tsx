interface IconProps {
	size?: number;
	callback?: () => void;
}

export const Check = ({ callback, size }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" onClick={callback} className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
		</svg>
	);
};

export const MagGlass = ({ callback, size }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" onClick={callback} className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	);
};

export const Bulb = ({ callback, size }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" onClick={callback} className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
			/>
		</svg>
	);
};

export const Github = ({ callback, size }: IconProps) => {
	return (
		<svg
			fill="#FFFFFF"
			width={size}
			height={size}
			version="1.1"
			id="lni_lni-github-original"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 64 64">
			<path
				d="M32,1.8c-17,0-31,13.8-31,31C1,46.4,9.9,58,22.3,62.2c1.6,0.3,2.1-0.7,2.1-1.4c0-0.7,0-2.7-0.1-5.4
c-8.6,2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2,0.1-2,0.1-2c3.1,0.1,4.8,3.2,4.8,3.2c2.7,4.8,7.3,3.4,9,2.5
c0.3-2,1.1-3.4,2-4.2c-6.8-0.7-14.1-3.4-14.1-15.2c0-3.4,1.3-6.1,3.2-8.2c-0.3-0.7-1.4-3.9,0.3-8.2c0,0,2.7-0.8,8.6,3.2
c2.5-0.7,5.1-1.1,7.8-1.1c2.7,0,5.4,0.3,7.8,1.1c5.9-3.9,8.5-3.2,8.5-3.2c1.7,4.2,0.7,7.5,0.3,8.2c2,2.1,3.2,4.9,3.2,8.2
c0,11.8-7.3,14.5-14.1,15.2c1.1,1,2.1,3,2.1,5.8c0,4.2-0.1,7.5-0.1,8.5c0,0.8,0.6,1.7,2.1,1.4C54.1,57.8,63,46.3,63,32.6
C62.9,15.6,49,1.8,32,1.8z"
			/>
		</svg>
	);
};

export const Star = ({ callback, size }: IconProps) => {
	return (
		<svg viewBox="0 0 1024 1024" fill="currentColor" width={size} height={size}>
			<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
		</svg>
	);
};

export const Close = ({ callback, size }: IconProps) => {
	return (
		<svg
			onClick={callback}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="icon icon-tabler icons-tabler-outline icon-tabler-x">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</svg>
	);
};
