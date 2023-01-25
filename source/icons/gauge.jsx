import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function GaugeIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};