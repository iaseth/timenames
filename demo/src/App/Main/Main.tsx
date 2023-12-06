import React from "react";

import { getTimeName } from "timenames";

import AnalogClock from "./AnalogClock/AnalogClock";
import DigitalClock from "./DigitalClock/DigitalClock";



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
				<AnalogClock time={time} />
				<DigitalClock time={time} />
				<footer className="px-4 py-6">
					<h4>{timename}</h4>
				</footer>
			</section>
		</main>
	);
}
