import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ToothPainIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};