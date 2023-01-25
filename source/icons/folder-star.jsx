import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FolderStarIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};