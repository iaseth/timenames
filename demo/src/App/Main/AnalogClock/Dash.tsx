


interface DashProps {
	deg: number,
	radius: number,
	height?: number,
	width?: number,
	className?: string,
	color?: string
}

export default function Dash ({
	deg, radius,
	height=12,
	width=2,
	className="",
	color="#222"
}: DashProps) {
	const radians = deg * Math.PI / 180;
	const hyp = radius;

	const style = {
		backgroundColor: color,
		height: `${height}px`,
		width: `${width}px`,
		top: `${Math.cos(radians) * hyp}px`,
		left: `${Math.sin(radians) * hyp}px`,
		transform: `translateX(-50%) translateY(-50%) rotateZ(-${deg}deg)`
	};

	return (
		<div style={style} className={`absolute rounded-full ${className}`}></div>
	);
}
