interface gapProps {
	gapWord: string;
}

import { useEffect, useState } from "react";
import WordGapModel from "../model/WordGapModel";
import { Check, Bulb } from "./Icons";

export default function Gap(props: gapProps) {
	const [currentGap, setcurrentGap] = useState(new WordGapModel(props.gapWord));

	const changeGapVisibility = () => setcurrentGap(currentGap.changeGapVisibility());
	const openGap = () => setcurrentGap(currentGap.openGap());
	const closeGap = () => setcurrentGap(currentGap.closeGap());
	const correctGap = () => setcurrentGap(currentGap.correctGap("bg-green-300", "bg-red-300"));
	const write = (texto: string) => setcurrentGap(currentGap.write(texto));
	const cleanGap = () => setcurrentGap(currentGap.cleanGap());

	useEffect(() => {
		window.addEventListener("correct", () => correctGap());
		window.addEventListener("clean", () => cleanGap());
		window.addEventListener("open", () => openGap());
		window.addEventListener("close", () => closeGap());
	}, [currentGap, setcurrentGap, correctGap, cleanGap, openGap, closeGap]);

	const inputView = (
		<input className={`w-4/5 rounded-md border mr-1 text-center border-black`} value={currentGap.userInput} onChange={(e) => write(e.target.value)} type="text" />
	);

	const textView = <p className={`w-4/5 rounded-md text-center font-bold `}>{currentGap.word}</p>;

	return (
		<div className={`flex w-32 h-8 p-1 border justify-center rounded-md border-black mr-1 ${currentGap.background}`}>
			{currentGap.isOpen ? textView : inputView}
			<aside className="w-3">
				{Check(correctGap, 3)}
				{Bulb(changeGapVisibility, 3)}
			</aside>
		</div>
	);
}
