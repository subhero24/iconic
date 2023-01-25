import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AccessibilityIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};