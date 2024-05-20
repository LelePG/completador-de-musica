interface ButtonProps {
	text: string;
	color: string;
	className?: string;
	callback: () => void;
}

export default function Button({ text, color, callback, className }: ButtonProps) {
	return (
		<button
			className={` md:px-8 leading-none text-gray-50 font-semibold text-lg md:text-2xl rounded-md shadow-md ${color} hover:bg-slate-800  ${className}`}
			onClick={callback}>
			{text}
		</button>
	);
}
