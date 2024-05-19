import React, { createContext, useState } from "react";

interface ErrorMessageContextProps {
	addError: (error: Error) => void;
	removeError: () => void;
	getErrorMessage: () => string;
}

export const ErrorMessageContext = createContext<ErrorMessageContextProps>({
	addError: () => {},
	removeError: () => {},
	getErrorMessage: () => "",
});

export function ErrorMessageProvider({ children }) {
	const [error, setError] = useState<Error | null>();

	function addError(error: Error) {
		setError(error);
	}

	function removeError() {
		setError(null);
	}

	function getErrorMessage() {
		if (error?.message) {
			return error.message;
		}
		if (error) {
			return `${error}`;
		}
		return null;
	}

	return <ErrorMessageContext.Provider value={{ addError, removeError, getErrorMessage }}>{children}</ErrorMessageContext.Provider>;
}
