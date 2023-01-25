import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FaucetIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};