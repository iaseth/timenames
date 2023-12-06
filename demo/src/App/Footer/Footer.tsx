


interface FooterProps {
	//
}

export default function Footer ({}: FooterProps) {
	return (
		<footer className="bg-zinc-900 text-white px-2 py-16 text-center space-y-6">
			<h4><a href="https://github.com/iaseth/timenames" className="underline" target="_blank">View Source</a></h4>
			<h4><a href="https://www.npmjs.com/package/timenames" className="underline" target="_blank">View Package</a></h4>
		</footer>
	);
}
