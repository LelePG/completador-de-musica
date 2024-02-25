interface ButtonProps {
	text: string;
	color: string;
	callback: () => void;
}

export default function Button({ text, color, callback }: ButtonProps) {
	return (
		<button className={`px-8 leading-none m-2 text-gray-50 font-semibold text-2xl rounded-md shadow-md ${color} hover:bg-slate-800 h-16`} onClick={callback}>
    {text}
</button>

	);
}
