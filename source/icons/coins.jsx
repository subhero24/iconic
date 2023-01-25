import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CoinsIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};