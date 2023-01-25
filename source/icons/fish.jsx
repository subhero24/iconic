import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FishIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};