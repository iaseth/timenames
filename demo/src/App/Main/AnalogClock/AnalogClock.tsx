import React from "react";



interface AnalogClockProps {
	time: number
}

export default function AnalogClock ({time}: AnalogClockProps) {
	const [size, setSize] = React.useState(400);

	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const s = seconds % 60;
	const m = minutes % 60;
	const h = hours % 12;

	const ss = s < 10 ? `0${s}` : `${s}`;
	const mm = m < 10 ? `0${m}` : `${m}`;
	const hh = h < 10 ? `0${h}` : `${h}`;

	const style = {
		height: `${size}px`,
		width: `${size}px`
	};

	const hourHandStyle = {
		transform: `rotateZ(${h*30}deg)`
	};

	const minuteHandStyle = {
		transform: `rotateZ(${m*6}deg)`
	};

	const secondHandStyle = {
		transform: `rotateZ(${s*6}deg)`
	};

	return (
		<section style={style} className="bg-slate-200 relative">
			<h2 className="font-mono">{hh} : {mm} : {ss}</h2>
			<section className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 -translate-x-1/2 -translate-y-1/2 rounded-full">
				<div style={secondHandStyle} className="absolute bottom-0 w-2 h-40 bg-zinc-500 rounded"></div>
				<div style={minuteHandStyle} className="absolute top-0 left-0 w-2 h-40 bg-blue-500 rounded"></div>
				<div style={secondHandStyle} className="absolute top-0 left-0 w-2 h-40 bg-red-500 rounded"></div>
			</section>
		</section>
	);
}
