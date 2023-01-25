import * as React from "react";

const url = 'url(data:image/png;base64,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)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function NoAvatarSquareIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};