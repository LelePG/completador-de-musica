interface searchInputProps {
	value: string;
	textLabel: string;
	defaultText: string;
	callback: Function;
}

export default function SearchInput(props: searchInputProps) {
	return (
		<>
			<label className="my-auto mx-3 align-middle text-bold">{props.textLabel}</label>
			<input className="p-2 rounded-md" value={props.value} placeholder={props.defaultText} onChange={(e) => props.callback(e.target.value)} />
		</>
	);
}
