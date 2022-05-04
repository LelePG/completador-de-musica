interface buttonProps {
	text: string;
	color: string;
	callback: Function;
}

export default function Button(props: buttonProps) {
	return (
		<button className={` h-full p-5 mx-3 my-2 rounded-md z-10 shadow-2xl ${props.color} hover:bg-violet-400`} onClick={() => props.callback()}>
			{props.text}
		</button>
	);
}
