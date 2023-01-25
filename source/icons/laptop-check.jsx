import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LaptopCheckIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};