


interface DigitalClockProps {
	time: number
}

export default function DigitalClock ({time}: DigitalClockProps) {
	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const s = seconds % 60;
	const m = minutes % 60;
	const h = hours % 12;

	const ss = s < 10 ? `0${s}` : `${s}`;
	const mm = m < 10 ? `0${m}` : `${m}`;
	const hh = h < 10 ? `0${h}` : `${h}`;

	return (
		<section className="h-20 p-2 bg-zinc-950 text-white flex">
			<h2 className="m-auto font-mono">{hh} : {mm} : {ss}</h2>
		</section>
	);
}
