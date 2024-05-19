import { Html } from "next/document";
import React, { MutableRefObject, createContext, useEffect, useRef } from "react";

interface InputContextProps {
	inputRefs: React.RefObject<Map<number, MutableRefObject<HTMLInputElement>>> | null;
	addRef: (index: number, ref: MutableRefObject<HTMLInputElement>) => void;
}

export const InputContext = createContext<InputContextProps>({
	inputRefs: React.createRef<Map<number, MutableRefObject<HTMLInputElement>>>(),
	addRef: () => {},
});

export default function ({ children }) {
	const inputRefs = useRef(new Map<number, MutableRefObject<HTMLInputElement>>());

	function addRef(index: number, ref: MutableRefObject<HTMLInputElement>) {
		inputRefs.current.set(index, ref);
		ref.current.onkeydown = (e) => {
			if (e.key === "ArrowUp" && inputRefs.current.has(index - 1)) {
				inputRefs.current.get(index - 1)?.current.focus();
			} else if (e.key === "ArrowDown" && inputRefs.current.has(index + 1)) {
				inputRefs.current.get(index + 1)?.current.focus();
			}
		};
	}

	return <InputContext.Provider value={{ inputRefs, addRef }}>{children}</InputContext.Provider>;
}
