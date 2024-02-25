interface ButtonProps {
	text: string;
	color: string;
	callback: () => void;
}

export default function Button({ text, color, callback }: ButtonProps) {
	return (
		<button className={`h-full p-5 mx-3 my-2 rounded-md z-10 shadow-2xl ${color} hover:bg-violet-400`} onClick={callback}>
			{text}
		</button>
	);
}
