import React from "react";
import Clock from "./Clock/Clock";
import { getTimeName } from "timenames";



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	const [time, setTime] = React.useState(Date.now());
	const timename = getTimeName(time);

	const updateTime = () => setTime(Date.now());
	React.useEffect(() => {
		const interval = setInterval(updateTime, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="min-h-screen px-2 py-4 bg-zinc-100 flex">
			<section className="m-auto text-center">
				<Clock time={time} />
				<h4>{timename}</h4>
			</section>
		</main>
	);
}
