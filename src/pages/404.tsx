import Image from "next/image";

export default function Custom404() {
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<Image src={"/../public/404.png"} width={500} height={500} alt= "404 - page not found"/>
			<a className="p-3 bg-blue-200 rounded-full" href="https://storyset.com/web">
				Web illustrations by Storyset
			</a>
		</div>
	);
}
