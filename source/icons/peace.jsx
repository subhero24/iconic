import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PeaceIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};