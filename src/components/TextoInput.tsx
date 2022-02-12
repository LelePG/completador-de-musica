interface textoInputProps {
	valor: string;
	textoLabel: string;
	textoPadrao: string;
	callback: Function;
}

export default function TextoInput(props: textoInputProps) {
	return (
		<>
			<label className="my-auto mx-3 align-middle text-bold">
				{props.textoLabel}
			</label>
			<input className="p-2 rounded-md" value={props.valor}
				placeholder={props.textoPadrao} 
				onChange={(e) => props.callback(e.target.value)} />
		</>
	);
}
