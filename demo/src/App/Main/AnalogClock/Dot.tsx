


interface DotProps {
	deg: number,
	radius: number,
	size?: number,
	padding?: number,
	className?: string,
	color?: string
}

export default function Dot ({
	deg, radius,
	size=8,
	padding=20,
	className="",
	color="#111"
}: DotProps) {
	const radians = deg * Math.PI / 180;
	const hyp = radius - padding;

	const style = {
		backgroundColor: color,
		height: `${size}px`,
		width: `${size}px`,
		top: `${Math.cos(radians) * hyp}px`,
		left: `${Math.sin(radians) * hyp}px`
	};

	return (
		<div style={style} className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 ${className}`}></div>
	);
}
