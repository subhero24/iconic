import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function KioskIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};