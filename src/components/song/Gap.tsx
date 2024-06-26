import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import WordGapModel from "@/model/GapModel";
import { Check, Bulb } from "@/components/template/Icons";
import useInput from "@/hooks/useInput";
interface GapProps {
	gapWord: string;
	gapIndex: number;
}

export default function Gap(props: GapProps) {
	const [currentGap, setCurrentGap] = useState(new WordGapModel(props.gapWord));
	const { addRef } = useInput();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		addRef(props.gapIndex, inputRef);
	}, [props.gapIndex, addRef]);

	const toggleVisibility = useCallback(() => setCurrentGap(currentGap.toggleVisibility()), [currentGap]);
	const updateText = useCallback((texto: string) => setCurrentGap(currentGap.updateText(texto)), [currentGap]);
	const correct = useCallback(() => setCurrentGap(currentGap.correct("bg-green-300", "bg-red-300")), [currentGap]);
	const clean = useCallback(() => setCurrentGap(currentGap.clean()), [currentGap]);
	const open = useCallback(() => setCurrentGap(currentGap.open()), [currentGap]);
	const close = useCallback(() => setCurrentGap(currentGap.close()), [currentGap]);

	const eventHandlers = { correct, clean, open, close };

	useEffect(() => {
		const events = Object.keys(eventHandlers);

		events.forEach((event) => {
			window.addEventListener(event, eventHandlers[event]);
		});

		return () => {
			events.forEach((event) => {
				window.removeEventListener(event, eventHandlers[event]);
			});
		};
	}, [eventHandlers]);

	const inputView = (
		<input
			className={`w-4/5 rounded-md border mr-2 text-center border-black`}
			value={currentGap.inputText}
			onChange={(e) => updateText(e.target.value)}
			type="text"
			ref={inputRef}
		/>
	);

	const textView = <p className={`w-4/5 rounded-md text-center font-bold `}>{currentGap.word}</p>;

	return (
		<div className={`flex w-44 h-10 p-1 border justify-center rounded-md border-black mr-2 ${currentGap.background}`}>
			{currentGap.isOpen ? textView : inputView}
			<aside className="w-4">
				{Check({ callback: eventHandlers.correct, size: 4 })}
				{Bulb({ callback: toggleVisibility, size: 4 })}
			</aside>
		</div>
	);
}
