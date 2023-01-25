import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PharmacyIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};