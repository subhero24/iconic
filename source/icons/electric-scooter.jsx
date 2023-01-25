import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgB7ZeBTcMwEEV/EAN0BG9ANyBMABvQEbpB0wlgA8oGMEHKBLBBs0HZ4HBUV71YdZOznVoRfpLVU1r/i9278xnIZDKZTCYzIYhI6bEzQ2Fq6Jfe0IkKU8LsPkfBA6NT67G39FYYE2v33+ABC8GzYCwi7v6C3FQYC2v3yfevp1Q5RD0IdJZs2isCuRH8dn3hu08Mp2H2PVJB3UR8EsybsXl7pMBKxB2EWItXuDba6Td7gQWE6DkfIfM5khw4Op/rjzl7tIWchtlzBCBegIbH+6YoigZyfpitcE0oQjNH3UMxTSKHQt0+aAZPfEIoFg2zS3iScgFfzFbwJOUCeCLfYWq05TjkMEyO1VIEJfJQhyV1b1F16ClqtRTRdM85WpEb72ug1VJE07WdXLpBHSkhJJZuMcBRjVOdftdjqUcbr5Uez+Z5W1EkdwKYuapHd6tblQeEYO2IYs9nFA+Xbm+bMeQc+HXYMauGS7fXxy36acOjNPaL3pW1cciTrMEhDCQ84tRKu3S3CIUO5bOPBYSMpetyVl1wUsGTsXRdztqyVxvxvbFLBDKWbiaTyWT+B3/12rUmUvRhMQAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ElectricScooterIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};