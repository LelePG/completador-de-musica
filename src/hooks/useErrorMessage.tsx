import { ErrorMessageContext } from "@/contexts/ErrorMessageContext";
import { useContext } from "react";

export default function useErrorMessage() {
	const context = useContext(ErrorMessageContext);
	return context;
}
