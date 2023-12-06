import React from "react";

import AnalogClock from "./AnalogClock/AnalogClock";
import DigitalClock from "./DigitalClock/DigitalClock";
import Timename from "./Timename/Timename";



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	const [dialSize, setDialSize] = React.useState(320);
	const [time, setTime] = React.useState(Date.now());
	const offsetMinutes = new Date().getTimezoneOffset();
	const offsetMs = offsetMinutes * 60 * 1000;
	const localTime = time - offsetMs;

	const updateTime = () => setTime(Date.now());
	React.useEffect(() => {
		const interval = setInterval(updateTime, 50);
		return () => clearInterval(interval);
	}, []);

	const updateDialSize = () => {
		const wh = window.innerHeight;
		const ww = window.innerWidth;
		const min = Math.min(wh, ww);
		setDialSize(min);
	};
	React.useEffect(() => {
		updateDialSize();
		window.addEventListener('resize', updateDialSize);
		return () => window.removeEventListener('resize', updateDialSize);
	}, []);

	return (
		<main className="min-h-screen px-2 py-4 bg-zinc-100 flex">
			<section className="m-auto text-center rounded shadow overflow-hidden">
				<Timename time={localTime} />
				<AnalogClock time={localTime} size={dialSize} />
				<DigitalClock time={localTime} />
			</section>
		</main>
	);
}
