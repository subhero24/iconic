import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BrainIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};