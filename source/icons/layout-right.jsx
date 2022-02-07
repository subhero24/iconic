import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJlSURBVHgB7dyNbdRAEIbhOSqADkwHSQVcKuFKSAc5KgAqSNIBHRxUAFRw28FdB8us7AiEbOfA63ze9ftII0uOHO36888mkscMAAAAAAAAAADUbmMziTG+9s3O653XlVdjZQldPXp93Ww2wUqQTrzXndcp1uXOZpD1DvBBNr45WHlX+6WC103OuyFbACs4+U+CZQwhZwBHq//kPwle1x7C2SZ6ZRl0z8fG1qPxurUlSI+eZ15eB69tbFdFxejG/DAyr9Mi5uSD2I0Mcm+FS3MYmZ/+Luiu8D73VomROX4xNR/EcWBwW6tEbB9HfY420eRVUBpF7y92VonYPutPfT+bOk8CuNBc88yyDC1N/P2vklQfrWQDz8ZoC5VOeM9w9xccN8s8V/cISle9b/5ev599uG+eOW6Wea4xgP8aL++AShGAGAGIEYAYAYgRgBgBiBGAGAGIEYAYAYgRgBgBiBGAGAGIEYAYAYgRgBgBiBGAGAGIEYAYAYgRgBgBiBGAGAGIEYAYAYgRgBgBiBGAGAGIrTGA84X7XsQaA/jcs+/RSjXX14Nz8uF9+uMz1f2Fx/CVpFJxH+nFwtrTqOQIIAzsv7JKxOHGI8EmyhHAz4H9s3QZFNkN7A+m5lfHbRxWfAix7SsxZGdqse0TOtYj9D4W1juom1PqEXSI4xpbgjje1qtWe8sgy1Ixtiue77aitpW++nxrGWRZhnb9M29sCS+l+QVr55oFrYv/TbDMrYuz/iGWBtbdmh+sLukOT3O6zt1Ffc729Y1vtl7vrb0jGitL8Prh9c3rIUebYgAAAAAAAAAAsE6/AGKtYL1APxlpAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LayoutRightIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};