import React from "react";

import AnalogClock from "./AnalogClock/AnalogClock";
import DigitalClock from "./DigitalClock/DigitalClock";
import Timename from "./Timename/Timename";



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	const [time, setTime] = React.useState(Date.now());
	const offsetMinutes = new Date().getTimezoneOffset();
	const offsetMs = offsetMinutes * 60 * 1000;
	const localTime = time - offsetMs;

	const updateTime = () => setTime(Date.now());
	React.useEffect(() => {
		const interval = setInterval(updateTime, 50);
		return () => clearInterval(interval);
	}, []);

	const [dialSize, setDialSize] = React.useState(320);
	const padding = 16;
	const paddingX = padding * 2;
	const paddingY = padding * 2;
	const headerHeight = 80;
	const footerHeight = 80;
	const updateDialSize = () => {
		const h = window.innerHeight - paddingY - headerHeight - footerHeight;
		const w = window.innerWidth - paddingX;
		const min = Math.min(h, w);
		setDialSize(min);
	};
	React.useEffect(() => {
		updateDialSize();
		window.addEventListener('resize', updateDialSize);
		return () => window.removeEventListener('resize', updateDialSize);
	}, []);

	return (
		<main className="bg-zinc-300">
			<section className="min-h-screen max-w-3xl mx-auto h-full text-center shadow flex flex-col">
				<Timename time={localTime} />
				<AnalogClock time={localTime} size={dialSize} />
				<DigitalClock time={localTime} />
			</section>
		</main>
	);
}
