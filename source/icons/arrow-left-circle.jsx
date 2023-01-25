import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgB7ZiLcYMwDEBFrwPQDdig2SDuBh0hG4QNmg3CBqEbdAMuEySdADoB2UCVinsVPlM+NjS5+t3pQoxtyZJsbAMEAoFA4D8TgScQMaafZ5I1yYokIYn16wtJRXImOZK8RVF0gWuADE9IMpIax3HgtvBXsMdJ9ujOXkdvUePZ66XFmIJkR6Kkd/VguSwlOVnalYtFgxStLMaz4WpEH0q3MQexgjmxeJ7zPoWJ6IjUi0XCMN6LxywR5Wf/cwLbE7ZGj+HWg5CR2INPdOpIJqfNLzpSQ0cCvqDOctFxATOB7YmdgQ+wWQIlqqf+90QfPSGxWZ1kmrrPBepkIzo99dQ1V6kdjNdXiPabvvp30I8Sz6/QrTihH06vRBdVJDmM5yie1+AKtr+cqqOO6fnR6SP6UkMjzvTuRjkX4WdX+WDuIi2eZ3KSD+gnp/4qS3+l/nuh9w/ggvAGdryXnh9LOUWnZMgcuGruB9ThlPlKIQ6vGXLiCRxSyCzA9tLpfui59kk8JIXexbOyVdBR4UhUuighKSYOQu6xzuAKtj9kRU9dHx8yGfENuILNVqLuSyNR39dWAtHXthqbQ/ugKDjqKYSeA/gCl9lObw0dCfjEiMLcBxo/W2lDSYwLHSlhLtD/oX6LSx7qtdLbvVYRBnRdbPEanmoDY6M+l71YDF/G8x0DydCdDJe+WjQGwd7NcRy1NjwBR+a4Xlckj3Ar1+uBQCAQuGk+AXugS02ioem2AAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArrowLeftCircleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};