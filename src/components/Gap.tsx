import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import WordGapModel from "../model/GapModel";
import { Check, Bulb } from "./Icons";

interface GapProps {
	gapWord: string;
	focusRef: Array<React.RefObject<HTMLInputElement>>;
}

export default function Gap(props: GapProps) {
	const [currentGap, setCurrentGap] = useState(new WordGapModel(props.gapWord));
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		props.focusRef.push(inputRef);
	}, [props.focusRef]);

	const changeFocus = useCallback(
		(e: React.KeyboardEvent) => {
			const currentIndex = props.focusRef.findIndex((i) => i === inputRef);
			if (e.key === "ArrowUp") {
				if (currentIndex > 0) {
					props.focusRef[currentIndex - 1]?.current?.focus();
				}
			} else if (e.key === "ArrowDown") {
				if (currentIndex < props.focusRef.length - 1) {
					props.focusRef[currentIndex + 1]?.current?.focus();
				}
			}
		},
		[props.focusRef]
	);

	const toggleVisibility = useCallback(() => setCurrentGap(currentGap.toggleVisibility()), [currentGap]);
	const updateText = useCallback((texto: string) => setCurrentGap(currentGap.updateText(texto)), [currentGap]);

	const eventHandlers = useMemo(
		() => ({
			correct: () => setCurrentGap(currentGap.correct("bg-green-300", "bg-red-300")),
			clean: () => setCurrentGap(currentGap.clean()),
			open: () => setCurrentGap(currentGap.open()),
			close: () => setCurrentGap(currentGap.close()),
		}),
		[currentGap]
	);

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
			className={`w-4/5 rounded-md border mr-1 text-center border-black`}
			value={currentGap.inputText}
			onChange={(e) => updateText(e.target.value)}
			type="text"
			ref={inputRef}
			onKeyDown={(e) => changeFocus(e)}
		/>
	);

	const textView = <p className={`w-4/5 rounded-md text-center font-bold `}>{currentGap.word}</p>;

	return (
		<div className={`flex w-32 h-8 p-1 border justify-center rounded-md border-black mr-1 ${currentGap.background}`}>
			{currentGap.isOpen ? textView : inputView}
			<aside className="w-3">
				{Check({ callback: eventHandlers.correct, size: 3 })}
				{Bulb({ callback: toggleVisibility, size: 3 })}
			</aside>
		</div>
	);
}
