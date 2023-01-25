import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF5SURBVHgB7ZiNbYMwEIWPqgN0BEZIN8gmYZN2BDZINugI6QYdwdmg2eDFVkAyCPzD2diR7pMsRcY+3/ORh4FIEARBEBgAaHXrdfuHG3P9bMZTLehkTgGJL/FFpRl2fkvyI0cqiU7gYiWjfAnp6wfd/qw5VyrJkPTIIXDOvGodlcK+FyLnfc8q90F7gERuYxJ2xFDI4VRI7DazKqxtwolSgExuo/uv8ItoiQt2dJthrrLm9sQFO7uN2SC7CsTFrmnkvM1us3VNb7CEKLidqnoBI4tuEyOg8Q0ICcLkrttn0zS3pTV1vzdHJzG7ERHT6TZJ18whYIi76jbZbiF2OQNjx6z5Ri+OCChNdQIwPa7cfOOrEoDnQfHH6volLrlsdB575SndEpdCAkzyHaVgZwEm8T5m59+pErY+JEP+xPfxBxJ+jIp1G85CvVVihcC3Mk/MI6aHuTPlAvyXeh9p3MYjokMeEencJkCEqcQF09JzEo9yG0EQBEFY4gEb8NaVMn8NqAAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MultipleFoldersIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};