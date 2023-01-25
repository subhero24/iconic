import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Ufo2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};