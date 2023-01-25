import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function JpgIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};