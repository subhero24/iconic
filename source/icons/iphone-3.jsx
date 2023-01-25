import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQnSURBVHgB7dztcdxUFIDhYypwBywVABWw6QAqIFQQqCBOBZAKYlcQU4E3FdhU4O2AdCCOZjUDgR9Bq9Wurs7zzNzRj2wmsaRXe/XlCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYG5XsWJd113nYjuML3N8k+N6GPzXxxz7YflHjl0/rq6uPsZKrTKA3PG3uXgdf+/wTHOf4y5DuI+VWVUAueN/n4tfc2yCOexzvMkQbmMlVhFA7vibXLyLw1SH+T3l+CFD2EfjvojG5c7/KhePYec/p35q+Zjr/udoXNPfALkB+nn+TXBJN/lN8CYa1WwAdv5FaTaCJgOw8y9SkxE0F8Aw5/8tWKJfMoKmtk1TAQxXe/oTXtf2l6m/YfZtS1eHWrsK9D7s/EvWb5t30ZBmAsij/8s4XH5j2bbDDckmNDMFypX6HMff4e2/mu/i8GzL0xpu4Mwh13F/gNnk6HfgH+N4+1zHXwWn0R9RuuO9Hx6KY4T+fCvHbXe8bXAauTLvu+M0f6fy0nId3nTHeQimyxV53R3nJjiJ/kDSjfdn55t3uu646U9TVyJa0B2mkmMt/mS4hatA2xiv2WdTFuynOFxMGGMbC9dCAF/HOLeu8pze8FbY3bi/tfz3MloIYOw88vdgLrsYZ+zB6+xaCGAT4+yDuTyN/PziT4IXfyOsP5Ma8/n8ql71i/6Xtrbt0fwbYTCFAChNACfSHW7Yvc7x0M2nfw/3ZXAyzgFOoDu8p9Df+t/EeexzvLjE5d4WtscYAjiBbtqTqsfax+Hlk7P+1jYnwXximJJs4vw2OTzsN5EApnsVl/NdMIkp0ERj/3+ntvSf1xQIFkwA0+3icsY+msC/CGC6D3E5b4NJnANM1B3eeup/V9EmzusiL547B+ATw3X4F3Hep1D3w7/JRAI4gf6O7HA07t+amnNevovD225N/fa1JTMFYhRTIFgRAVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApQmA0gRAaQKgNAFQmgAoTQCUJgBKEwClCYDSBEBpAqA0AVCaAChNAJQmAEoTAKUJgNIEQGkCoDQBUJoAKE0AlCYAShMApbUQwG7EZ5+Cue1GfHbx26OFAD6M+OzbYG62xzl1XXed47n7vOdgdrbHBeTK3Hxmpfd/tgnOwva4kFypL3M8/mNFP+S46Y9KwdnZHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP/xFyVT0VKcTuzWAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Iphone3Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};