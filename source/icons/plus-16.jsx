import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgB7ZcNccMwDIV1Q2AIhlAGhTJDCIOYwSBsDAYhYzAIgVAImtu5F83zX3qO0/bed6e7XiQ1ehdLUYgAAAAAAAB4CJh55F/GTIzycRMvnJy9OzvQXojiLyRitLOZ84zUm7D4jICZ63ijXsSKjwlwl0wQYp0p7zs4+8jlbymAKwV8C/eQ+C97FUe9kDctCJAoukdqBdAN8DIAzqZr817ofjDOtDdTm7SJAP7/Hjj3h0nEat8TR3H56I+sppas6IEUc1gU50fvXKqp9xHSzj53a/KVT+DyHvA2hD6Rp33sJPwT73yEhohfjuGp4Le0BSsEqIhfCf8p4r9pjK6ioYBmq0TLJv4Sv2OrxGsith+FJ2DDPuClicfAZ6gXnNhGPaOIU1y3Thdne2sBWYLYayMmi+etGjQjwGYKsokcw3/X64nF9wEAAAAAAADPwQ9So8uNqlUETgAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Plus16Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};