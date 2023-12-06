import ClockHand from "./ClockHand";
import Dot from "./Dot";
import Dash from "./Dash";



interface AnalogClockProps {
	size: number,
	time: number
}

export default function AnalogClock ({
	size, time
}: AnalogClockProps) {
	const seconds = Math.floor(time / 1000);
	const s = seconds % 60;
	const m = seconds / 60;
	const h = seconds / 3600;

	const radius = Math.floor(size / 2);
	const style = {
		height: `${size}px`,
		width: `${size}px`
	};

	const sixty = [...Array(60).keys()];
	const hoursHandLength = radius * 0.45;
	const minutesHandLength = radius * 0.70;
	const secondsHandLength = radius * 0.85;

	return (
		<section className="grow bg-blue-200 relative p-4 flex">
			<section style={style} className="m-auto bg-white w-full h-full rounded-full shadow relative">
				<section className="absolute top-1/2 left-1/2 w-0 h-0">
					{sixty.map(idx => <Dot key={idx} deg={idx * 6} radius={radius} size={(idx % 5 === 0) ? 10 : 6} />)}
					{sixty.map(idx => <Dash key={idx} deg={idx * 6} radius={hoursHandLength} />)}

					<ClockHand deg={h*30} color="#222" className="rounded-t-full" width={16} length={hoursHandLength} />
					<ClockHand deg={m*6} color="#22a" className="rounded-t-full" width={12} length={minutesHandLength} />

					<ClockHand deg={s*6} color="#111" className="rounded-t-full" width={8} length={secondsHandLength} />
					<ClockHand deg={s*6 + 180} color="#111" className="rounded-t" width={16} length={hoursHandLength/2} />

					<div className="w-10 h-10 bg-zinc-950 rounded-full shadow -translate-x-1/2 -translate-y-1/2"></div>
				</section>
			</section>
		</section>
	);
}
