import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function SignageIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};