import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPYSURBVHgB7d3hbRRHGMfh96IUAB3YpAIoABRSCK4g0AEuARoC04BNBT53ECrwZlbeD4QQohP2zs79n0ca8cV4xbv8dvfmTroqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg6E3T9Kitt219nB7OVVuv6si0f9Na87s8xvl114Z60tZ+Ws9+PmYdgenuP//ptO78rkeZ364GMJ+89sdJreumrae73e5LDazNbj7H17X+/OZz9mzr8/ulNq6dwLNa/+TVcsw3NbD56t+cVZ/5ndYA89t8AM3r6udFjW2++v9Z/Tyvjdv8I9C0XMZ6abfwIR4Tv2d5/LmtfqY2vk1fZEe4A8CDGSGAi+rnc43vovrZ/PxGCOBT9fOuxjY/Pvaa33zs97VxI7wGeNT+uKoO26Dt+fW0Bra8fHrc1mV12AZt83tSG7f5O8Cyj/x73e3Lr+VmOebQltfvf7X1stad3345Jvdpfk9guvu4wkP52Nb5ctc5KtPdO8Lm941ht/j+y3wWDvn5kbc5f9Z0+Dbp5rc1D2UblGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIj2a4U79DvFOC7uAEQTANEEQDQBEE0ARBMA0QRANAEQTQBEEwDRBEC0+M8C7ZoKlv5ZKHcAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaMN8TepX3+Z5r19r2n7vt79vOsZvTr2v+X1nXv/6kZHmN8QdYDl5j9s6b+tDW7c/WIf6+u9etnU2n+Rj+vrc/5nfIXb149nP83t1bPPrrg3ztK39tJ79csw6Bh3mdz3K/DZ/r1qGuG/rpNZ109bTdjv/UgPrOL/5mM+2Pr8RHoHOav2TV8sx39T4zqrP/E5rgPmNEMDr6udFja/n/J7Xxo3wCNT1QXI3+JZQ5/nNO0Kbvsh6H4BoIwRwUf1c1fguqp/PtXEjBPCp+nlf4+s1v/nR611t3AivAR7V3Rssp7WufXt+fVKD6zi/6za/32rjNn8HWPaRX9bdvvJaL+j2yzGH12F+8zGu2/qjuF/tajZ/TOGyrdsHWh/aOl+umkdnpfm9Pdb5AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Q3pZEPkPSYG4gAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function HeadingIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};