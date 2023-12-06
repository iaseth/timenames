


interface ClockHandProps {
	deg: number,
	length?: number,
	width?: number,
	className?: string
	color?: string
}

export default function ClockHand ({
	deg,
	length=120,
	width=20,
	className="",
	color="black"
}: ClockHandProps) {
	const containerStyle = {
		transform: `rotateZ(${deg}deg)`
	};

	const handStyle = {
		height: `${length}px`,
		width: `${width}px`,
		backgroundColor: color
	};

	return (
		<div style={containerStyle} className="absolute w-0 h-0">
			<div style={handStyle} className={`-translate-x-1/2 -translate-y-full ${className}`}></div>
		</div>
	);
}
