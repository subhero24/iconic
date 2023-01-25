import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HandLockIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};