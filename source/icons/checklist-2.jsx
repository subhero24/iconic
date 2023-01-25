import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Checklist2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};