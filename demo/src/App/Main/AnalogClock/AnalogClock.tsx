import React from "react";
import ClockHand from "./ClockHand";
import Dot from "./Dot";
import Dash from "./Dash";



interface AnalogClockProps {
	time: number
}

export default function AnalogClock ({time}: AnalogClockProps) {
	const [size, setSize] = React.useState(400);
	const radius = Math.floor(size / 2);

	const seconds = Math.floor(time / 1000);
	const s = seconds % 60;
	const m = seconds / 60;
	const h = seconds / 3600;

	const updateSize = () => {
		const wh = window.innerHeight;
		const ww = window.innerWidth;
		const min = Math.min(wh, ww);
		setSize(min);
	};
	React.useEffect(() => {
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const style = {
		height: `${size}px`,
		width: `${size}px`
	};

	const sixty = [...Array(60).keys()];
	const hoursHandLength = radius * 0.45;
	const minutesHandLength = radius * 0.70;
	const secondsHandLength = radius * 0.85;

	return (
		<section className="bg-zinc-100 relative p-4">
			<section style={style} className="bg-white w-full h-full rounded-full shadow">
				<section className="absolute top-1/2 left-1/2 w-0 h-0">
					<ClockHand deg={h*30} color="#222" className="rounded-t-full" width={20} length={hoursHandLength} />
					<ClockHand deg={m*6} color="blue" className="rounded-t-full" width={15} length={minutesHandLength} />
					<ClockHand deg={s*6} color="red" className="rounded-t-full" width={10} length={secondsHandLength} />

					<div className="w-10 h-10 bg-zinc-900 rounded-full shadow -translate-x-1/2 -translate-y-1/2"></div>

					{sixty.map(idx => <Dot key={idx} deg={idx * 6} radius={radius} size={(idx % 5 === 0) ? 16 : 8} />)}
					{sixty.map(idx => <Dash key={idx} deg={idx * 6} radius={hoursHandLength} />)}
				</section>
			</section>
		</section>
	);
}
