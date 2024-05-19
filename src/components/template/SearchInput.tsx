interface SearchInputProps {
	value: string;
	textLabel: string;
	defaultText: string;
	callback: Function;
}

export default function SearchInput(props: SearchInputProps) {
	return (
		<div className="my-2">
			<label className="my-auto mr-3 align-middle text-bold">{props.textLabel}</label>
			<input className="p-2 rounded-md bg-gray-100" value={props.value} placeholder={props.defaultText} onChange={(e) => props.callback(e.target.value)} />
		</div>
	);
}
