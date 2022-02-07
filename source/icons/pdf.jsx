import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJGSURBVHgB7dqLbdswEIDhc9EB0g2UCYps4EySjOBOEHuCJhM0naAjuBs0G1gb2Buwx9gGBMNSKPEoUsr/AYcAEnORRJHhQyIAAAAAAAAAAAAAAAAAAAAAAADKOfeksXfd/mn80qiM8u00thqPITkH5G/yZX9KifyFuX78zawM8509JbreprWUxvV7k5oejPN5O/dBa4jMvxdjC4nkr0qGOWjcLhaLg1G+s1rjXvPW105G5j9o3m9i6Ivkc6OxEnuVxlaf843Y+y3GclaA9yBpVGJbub6VbvTtT/HCxGnrLC/KVCHlQvOdyi01Xl1Hf32tFYTmn4weD8y0XKP82rVbxeZPLXcXFE27hbX++NtyeimFm3wFnGxajn+XwiUbhuqbuUhZ7uJ3fF+/T5U/pVm0gMu5xJTMpQuK5rolWwsapQJcz8WyAr1PGl2CtaCcSxHem3YfdyH5PuqjY//HBJrVUoT3Jp9czgp4n97LtMxqLWjTtmJZoGRrQV9lfP5mfujNvEpBcs0DxqyAWo5N+HnK43ZrySog1xs1NUzEMptFBejQftlyqpbCzaUFPLYcr6Vwk68Ad/wcpW1r03zcXhzrHaaQfH752R23JLeuWzUk/5hyzAMGGfCQJjHRG21DJjZfT7X++ds++dmQsVNr3MtEWFTAIfBYTL5QtXR8FdeRP9vM3KICXq4cixl9vEh/55XVu4B+3/p689Nu9fm0bbe32DVq5Ouy0/ij4Xeqen2GaH29AAAAAAAAAAAAAAAAAAAAAADgc/sPqutsIzaWGGYAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PdfIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};