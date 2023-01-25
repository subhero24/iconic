import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArchiveMinusIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};