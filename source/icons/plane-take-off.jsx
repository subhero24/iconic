import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PlaneTakeOffIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};