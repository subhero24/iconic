import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGlSURBVHgB7ZiBcYMwDACVTpBuwCgZoSNkg44QZ4KkE6QbZIR2A7oB2SDdQJXvnKswJkhgTK/R3+nA2MiSbaFDAIZhGIahABErkiZIBRPJrU8y4Tv+coQJMONvzOtEmJBzJVnDCBLGcydG6ZRMuk1M6ECJN5DkC/upZ3GiZ8VqUELvnHGYE+SEFG6ibb6y9kah5xAZ2vTcew6QC2wH74nkyNofCj0cF6SvjZAD7AZvCtGZZQa6qJ165iAHmA7eGAcjSDmg4Uk4bicY8woLMOgArcoLXarQvKwY1H4m+Q59/tO4gcJIdmDL7j95B/ngjX9jjyQ7VZbonFeJ/jUfAEpKxMD+dqUVv8SdYRf20djHodRX6M9iDiyNObA0kky8QznFE5lkBxzI0YzNgiaRSSieyAYdoEzrVgmgu9o+UzsozKggDmfdsUdi41lM7aaMGU0iqJ3y/VbQY/eXsqUfcjLV+KDjGOloeu49kwpn2Y1nuiRllTPkIqfxQZ//h6jvGO+LXnkKWzhTIsP7pcUKcoFKlLrnL+5iVGgawIESLF1eNwzDMP4VP849aJ5UawrhAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function AZSortIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};