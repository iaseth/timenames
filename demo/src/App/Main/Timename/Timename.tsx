import { getTimeName } from "timenames";



interface TimenameProps {
	time: number
}

export default function Timename ({time}: TimenameProps) {
	const timename = getTimeName(time);

	return (
		<header className="px-4 py-6 bg-blue-700 text-white">
			<h2>{timename}</h2>
		</header>
	);
}
