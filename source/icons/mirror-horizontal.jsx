import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgB7djRDYIwEAbgH+MAjoAb6AY6ia7gBMYN3EA2cgTZADaoRyim8iCH0F5I/i9p6kPt9eQ09QAiIiIF51wu4y6jcvG8ZDyaWJiTbHiKfPC+JtZJc7ZMcfhcpqeMDdKqZeyzLCsxhSRQuO9HfEAksvfOx+jcMVVvwx0iaz6gsJSG1mtKyH0WCyQwJuYKC8cErDEBa5oEbr05BYuY9BftXegMG8XQXUiTwEumHDZKSWD7a8Hif4XWijVHGJYQaOnkS3z1d/MrEhkTk/8HrDEBa0zAmiaBunsRsycUxAhbNyWmcm0/NGxsResN+Z5Q2Id6DL1n8a3FwRLyG1wQlFICTazL5L5oyLXt9aL3iOdW+ZLNQUREpPAG4wkEnPoT63gAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MirrorHorizontalIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};