import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArchiveArrowDownIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};