import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function GrapesIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};