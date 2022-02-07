import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgB7dztUeswEIXhza2AElICLdwO6CDpgHTgdABUAB2FDkIHKWFZYTEwECzZkeKV531mNPyxPM45IfFnRAAAAAAAAAAAAAAAcEBVOxunOB4E12Fh39h41d/2groGwg9OgnoS4X8Q1GHZrm0cNUFQXm74FFDBmPApoLCx4VNAQVPCp4BCpoZPAQVYhrcZ4e8poIIY/kkT4cdlKaCkMeHH5SmgFMvtbkz4cQ4FlGCZbTRtd2YeBVwqM/ztH3Mp4BKW1f3U8OP8uR1sPNtYS2u0v5AyJHwf3CXW4UXY1p20QvPCv81Yjzcb8U4LhR/XldprurawPTdyoX9SiW1cZ3/2A4u82fi/Wq1eJc+T+BLC9/lRpOl3/lEnfJnZnEf19Z9wFG+0Uvhz0v5k4Vniifa7aYsK/5P7ApYcfuC6gKWHH7gtwLbhYenhB54LGNorCff0XLyv7EGtAqodB0ScLEsoUcDQAVI4yj0s4SPINQv4RRf+PVDrI6iYpZfgvoBgySU0UUCgA7eQtFqCtnIq4lOtEvTrCRkvDuKV5pWQdS0gri91wDeHZ/FM0yW0fkFmLd5poRLUn6auC+eU0NJF+a20xjZ6l/HiNgPz53bU/o3U7rkt2/htxgvd/DH3LME4mSVwa2JNmndzbvdjDgWUpHm3p3fflqeA0saUQAGVaN4jSh0FVKQ8pDe/qSUIyplSgqCssSUIyhtTgqCO3BIE9Wj/g00HCphRogR+suwaBkp4FFyPfj0hE8ZeAAAAAAAAAAAAAABw7B12WnNU6iBSawAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BackIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};