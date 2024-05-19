import InputContext from "@/contexts/InputContext";
import { useContext } from "react";

export default function useInputContext() {
	const context = useContext(InputContext);
	return context;
}
