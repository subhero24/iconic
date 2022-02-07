import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7dnrbcIwFIbh005AN8gIjMBGZQPSCapOQDsJo2QE2OCrLVtq/sSX2FJS8T6ShYRscHw52AczAAAAAAAAAAAAAAAAAAAAAAAAAAB2QNLBlYsrN1cm/bnH986uDIa+/KDGAS51ZSI6cQP5Hld4Ld/mbFgvhptWF0O9uPJ7YSfUUIj5a8LOEv9Zg6GMG6zvzGCOrpxm9Y+ZNt7NkKew+pdMqZUc206J9gdDmsJZfslQ0D4Vvkb7jxROIz1j8hrXiv6OauOf9dP2wHdE+3Cs6PNJfYzW6MUauU7c3cvmsfPFqanvR8/aPdzXvlmDV8OmekzAl+2AZsfOgrrF4Srjxxo1T4DbgqOFSXjYtk4VdVtvvv5ZP9yzP98NWssnmKLbrNL3CFISOQo5/yWT2i5igyFP+dz/VbM4r3DsvCh9Vym+Rzw9kYzbntIpiVrE/jXUnlLwRsN6CjuBvyS3pPCbkMv3z91EzO8vTsQ5DvB8V0zxPR+yyPkDAAAAAAAAAAAAAAAAAAAAAAAAALr4BX55WOGenPFPAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ScrubberIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};