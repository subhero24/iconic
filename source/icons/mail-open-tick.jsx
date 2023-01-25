import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHSSURBVHgB7ZgLccMwDIbVISgEQyiEQBiDlcHKIGHQMugYFEIpjIEhFIJmXZ2Lp9hOHMtpdvN3p7s8HEl/LMdqASqVSqVSKQAiHo09jGk6hr+CSbYxdscx2xYSSZxzM6ZgK1Ayxr48iVL5dNa05/71pUJM8L2x1ibKudB9mBaJ1oeCNTEBPwOJ32PJRIRoXGN94LPOdSDxRsBPGSFY6MuCz0+tTp3J1CCtJ0C/QPcggPFzCghpIReP06tU4iwOrY8bDzb13Buk01iTRhXxi2Hyp3eIcQ4FgVyYP+05V7AQWzbfsRiQC3Puq1MKeIREzDPvON5L7vjcIMsIcK51OOY80x8l6CuZUyymqAB7XWFiSWG4ZA5sXP+COiglwEmItwYP9206Y33tB5Wj+CeZBw4KcMacMA2vyJcJsON8JeWDxhxgLeYKsGNpgV4iyf9qsyXYTQ1wE98ZYGMsaSU2xeYE2DLsN0vZbhQKQ4sbS7YSUBDj/gPH+0QHuawhwL55FxLSgATSAnD4hdfac75/0LECKdi0NpAJe9Mk5lYseRvwwgJk7aLo72R7FEhjp/iBy2gTRFyhFDj805xMxCcXoaAkOLTOGufTTfiU6/srlUql8i/5AefPJkRJ06W+AAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MailOpenTickIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};