import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FolderCrossIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};