import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB7ZiBbcMgEEUvVQdwN3A3SDfKBs0GSSdoOkG7gZsJPIK9gbOBs8HlrBDljIkNxgIi3ZMQFneGf0AOEwBBEARB8AARcyqNKjk8E0z8jecJgoRmVGocUnU2SB0S+Y2P+YWUIYE7TfCeylZr20GKkLBPXTyzHTTbFlKCBK01gYXBp9B81pACaM44mcEv0/xajJ2Z0DFd2gYbDOynS6sZVdutZe+VEAMaeIN9NszWzXTJhBY8uLF3g4HXg+nGHvriWxzSakEcoq6CJi5j7f/4mJL5ZdwAC7OacuCDrghTO/Gu6kbVZ3J9m+pjCV5gPucRW7CM4xNAzZ4buM9+xxEC4bOFcqoqGM52tzIf5Hoy9UF8gT1/vJ9ZjP0AVSYqWPYp0XBG4HyaKX2zV8AFU/C2TI35CuGx2ULWn+LBV8CmDxd/nyyUBBJAbCSA2EgAsXEKAAPca13HsDmJT1Ry9dyi553E8bOinnKwWYEfiMcyY+P1cl5hOBpM7V89QRAEIUkuQnEfTdHoL4cAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Building01Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};