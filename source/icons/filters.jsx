import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKeSURBVHgB7d3RcRMxEAbgPSqADgwVAAUAoRFCA0AJ0EFSAo0EQwGBDnIlUAFmL3YyeePhBkvWft/Mjp/j3FrSaebfCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqGOKTux2u8f58THrzaEYz8+sy2mavkYnumiAfPg3+fEtaxNUcJP1NhthjsZ6aYDlC9kElSz/85fZBL+joUfRWD785+Hhr+hp1qdorHkDxH7fT02vorHmW6BcAXZBVbvcAjX9Ee5hBYBmemiAbVDVr2ishwb4HlS0bH0vo7EezgDLBdhyQbIJKrnJ/f+zaKz5CnB4D3yWNQdV3F6ERQe6OAQvN4JZy3vh99HBvpD/Zpv1JfYXYHMAAAAAAAAAAAAAAAAAAAD8QzfzAdYyX+Aousv3X2uIBjBf4Oi6yfdfa5QGMF/g+LrI91/r5MNxzRdopot8/7VGSIc2X6Cd5vn+a538Fsh8gaaa5/uvZT4ApY3QANuglZPPcR2hAcwXaKOLfP+1RjgDmC/QRhf5/mud/ApgvkAT3eT7rzXEIdh8gaPZhnx/AAAAAAAAAAAAAAAAAIBjGyYefa0HAXNDfyfTNEnSe0AyXNw//E+yPmddZf0ZtK7zb30X3LMCxG0DLIkSV1EnW2jOOpPsoAHufv0rzheYs16cer7/WrZAEedRM1VuEwPk+6+lAWrPF3gdxdkCFZ8vkFug0s+AFYDSNEDt+QLlc1Q1QO35AhdRnDPAfr7AdeynHlZyl6hdWvkV4PAefMm6X+4CqhyI59jPVCjPTfADh5nDH7Kex5i2WT+yLqpfgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOj+AveWv9YWdEPmAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FiltersIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};