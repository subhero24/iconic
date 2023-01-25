import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FloorplanIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};