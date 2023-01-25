import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AlertIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};