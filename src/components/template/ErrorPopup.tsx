import React from "react";
import Popup from "./Popup";
import useErrorMessage from "@/hooks/useErrorMessage";

export default function () {
	const { getErrorMessage, removeError } = useErrorMessage();
	const message = getErrorMessage();
	return (
		<Popup onClose={removeError} isOpen={message !== null}>
			<h2 className="text-red-500 text-4xl font-bold">Error</h2>
			<p className="p-2 text-xl">{message}</p>
		</Popup>
	);
}
