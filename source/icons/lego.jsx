import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPUSURBVHgB7d3bbdxGFAbgs0EKcAnrCixXEKsDpYJYFSSpQFAFQTpQKog60KYC2xWYHdgdbIYQ/WIDC6xILg95vg8Y8EUQdkj+nAsvEwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzgeDy+auWulafjcj608j5msPX6LWUXG9AOyr5tnlrZRw5dK9e73a6LCWy9fkvaSgA+R56T45uulbftJPkaI229fkv6KVZuaJL3kc++lT9ipK3Xb2mrD0Dze+T1S4y39fotavVdoH5kFom1LsKofbz1+i1tCy0AvJgAUJoAUJoAUJoAUJoAUNrPUYxpydOy129qWgBKEwBKEwBKW8UYoHVL37XNTTw/e7Jv5VWsxNb71N/Vr38y9GMrn1p5bMORQySX+jmO4UnIu5jwaUiD4NMmrl/Xyn37SQ+RVMoADC+APLbyJiYmAKfNVL8ukr5Ak24M0Pb/b23zIWY4+VnMvpX+dcqbSCZVCzDsoH9jRlqA0y5Qv/ftJ/4TSaQJwNDt6a/8sw5wBeC0C9SvHyi/zdIdytQF6l/6Xs3sDi/WH+NZW/lzpAjABd97/RjjHSKvtdTvKsvnVbK0AHdxGX/HeP9FXmuq36WO+UmLjwGGm1xPMb+u9Ttfx0jt9/ZNeD9W2Ucua6zf9dI3yzK0AJeYGutauY4JDN/BuR7+ZxZdrLN+i0+LZgjAnPP9h1buY+JZh/5/DVfb25im3/1Sh1h3/Vb/WZXRWpP75Xieh6GZJpF+Gns4Nuf4EgvLMAY4d9759Ra+SblFw4XprJN66e8KrS4AS+8wTlvb8fQ+AKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKUJAKWtLgC+DJ3XsNDhqmQIwNcz//6vNe7orRsuTOcue3TusZ9chq9D98vxXAUVHXa73SQr27xUhhYg86JzzOtTLCxDAB6DqhY/9ikWm2jdoM+Rb9VF5jXJqpZjZZkFug+qSXHM0yw3ZDBcSoqrfy/TfYBfI8G0GLP7tg5xCmkCMKz8+GewdbeZVvlMdSe47ZiH0BJsVX9M+5M/1axfyiVHhzu9T2FmaCv6+f6bjOs7p3wWqN9RwyDptpUuWKsunq/6V1kXN1/FotOtRXjXNjetvInnmSIPxOXUd3O6eL67/9hO+kMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADl/Q/Zt34nnWRaSwAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LegoIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};