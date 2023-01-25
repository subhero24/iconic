import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7d3RjdNAFIbRGypICaEEKoDtZKlg6YClhHRAJ8lWkHQQl0AHZqxYYhFCiYMIaP5zpPsUP63m29jjSFMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQmXEc120+t9mNPxzaPBb0rC3yTZvT+HvTZ5uCHl1Y/K8jWBf0ZLrFGa/3XNCT+T7/WrviLlbFXUyresn1q6b4694UBBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANEEQDQBEE0ARBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANEEQDQBEE0ARBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANFijuGZT158avNhHn51bLNdrVZfK0REAPPZu9PBc5viGkObhxbCUJ1LCeBUFv9SQ5t3LYJv1bHunwGm83nL4r/Fps2n6lzCQ/BTcav31bnub4GWns/Lz3o/r9g2KNESAtgXtzpW5xICeCluta3OJTwDTC/ADmUnaKmh3f6/rc51/w0w72M/1Hlfm+sMdf6bdS/iIXh6ozn/N/tYAfe1f2Df5kudX4ANFSDmt0D/2tLt2N63H/8XtkGJJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogngfvYLrj0WdyGA+3lZcO22oCfjOK7bnMbLTgU9aot7cyGC6bNNQc/aIn9sc3i18HdtnqdviQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjMd3PvaBfb0GdyAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CrucifixIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};