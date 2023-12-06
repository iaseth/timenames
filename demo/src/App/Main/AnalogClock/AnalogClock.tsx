import React from "react";
import ClockHand from "./ClockHand";
import Dot from "./Dot";



interface AnalogClockProps {
	time: number
}

export default function AnalogClock ({time}: AnalogClockProps) {
	const [size, setSize] = React.useState(400);
	const radius = Math.floor(size / 2);

	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const s = seconds % 60;
	const m = minutes % 60;
	const h = hours % 12;

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

	return (
		<section className="bg-white relative p-4">
			<section style={style} className="bg-zinc-100 w-full h-full rounded-full">
				<section className="absolute top-1/2 left-1/2 w-0 h-0">
					<ClockHand deg={h*30} color="#222" className="rounded-t-full" width={20} length={150} />
					<ClockHand deg={m*6} color="blue" className="rounded-t-full" width={15} length={220} />
					<ClockHand deg={s*6} color="red" className="rounded-t-full" width={10} length={270} />

					<div className="w-10 h-10 bg-zinc-900 rounded-full shadow -translate-x-1/2 -translate-y-1/2"></div>

					{sixty.map(idx => <Dot key={idx} deg={idx * 6} radius={radius} size={(idx % 5 === 0) ? 16 : 8} />)}
				</section>
			</section>
		</section>
	);
}
