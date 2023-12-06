


interface ClockProps {
	time: number
}

export default function Clock ({time}: ClockProps) {
	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const ss = seconds % 60;
	const mm = minutes % 60;
	const hh = hours % 12;

	return (
		<section>
			<h4 className="font-mono">{hh}:{mm}:{ss}</h4>
		</section>
	);
}
