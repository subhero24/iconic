import * as React from "react";

const url = 'url(data:image/png;base64,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b5L1DWQLv7zgbtnBBvScHv9e1nG7pEpPRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERETz+huM2INW1INglgAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AvatarSquareIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};