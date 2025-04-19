interface SearchInputProps {
	value: string;
	textLabel: string;
	defaultText: string;
	callback: Function;
}

export default function SearchInput(props: SearchInputProps) {
	return (
		<div className="my-2 w-full flex flex-col md:flex-row md:items-center">
			<label className=" mb-2 md:mb-0 md:mr-3 align-middle text-bold">{props.textLabel}</label>
			<input
				className="p-2 rounded-md bg-gray-100 border-2 border-neutral-200 w-full"
				value={props.value}
				placeholder={props.defaultText}
				onChange={(e) => props.callback(e.target.value)}
			/>
		</div>
	);
}
