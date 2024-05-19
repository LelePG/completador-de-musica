import { Close } from "./Icons";

export default function Propup({ isOpen, onClose, children }) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col justify-center items-center">
			<div className="popup-content bg-gray-100 w-1/3 h-96 rounded-lg ">
				<div className="flex flex-row-reverse m-3 hover:text-red-500">{Close({ size: 30, callback: onClose })}</div>
				<div className="flex flex-col items-center">{children}</div>
			</div>
		</div>
	);
}
