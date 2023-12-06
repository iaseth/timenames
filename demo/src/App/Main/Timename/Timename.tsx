import { getTimeName } from "timenames";



interface TimenameProps {
	time: number
}

export default function Timename ({time}: TimenameProps) {
	const timename = getTimeName(time);

	return (
		<header className="h-20 p-2 bg-blue-700 text-white flex">
			<h2 className="m-auto">{timename}</h2>
		</header>
	);
}
