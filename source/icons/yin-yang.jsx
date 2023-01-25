import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function YinYangIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};