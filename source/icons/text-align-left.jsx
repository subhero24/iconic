import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7d3dUdtAEADgVSpIOhBUkKQA/iqBBgIt0EFcAo0EkwICHdgl0IGyZ5tHBCFW7oK+b2ZHPDLnW92e9mEjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAt+qiEcMwfMzHZcbJLvhz9xmLrutugldpIgFy8/f5uM3og31YZZxlIqyDUa0kQPnB+mCfypp+zSR4DJ71ISrLzX8eNv8UDjKuglHVEyC2dT/TOApGVS+B8gQYgqkMWQK18JJrlsVh1lpIgGUwlYdgVAsJcBdMoZSWi2BUC3eA0gArDZw+2KdV1v+HwajqJ8DuO/VpxjrYl00jLHhRE5fg0rHMKN+tL0Ld+jeWGdexbYCtAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+ieqDsp/sBmZfZpzsgvenDERfdF13E41oIgFy8/f5uA3T4udiM8i7hVnGrSRAWZA+mJPym5eB3o9RUfVJ8bn5z8Pmn6ODjKuorHoCxLbuZ56OorLqJVCeAEMwV0OWQFVfwi2cAFBNCwmwDObqISprIQHugjkqpe8iKmvhDlAaYKVB0gdzssr6/zAqq34C7L4Dn2asg7nYNMKiAU1cgktHMKN8F76IBupCJrPMuI5tA2wdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8J5UnxP8ZBiGpz+b+Z/+U0PXWcLXamKldpv/U8ZlxnHGSfAWZcRsmb5+ExLhVVpJgDIj+EeYFr8v69gOol5JgnHVV2f39i+Tw/tgn9YZXzIBHoNntTAp/jxs/in0GVfBqBYS4DKYynEwqoUSaAgm07kEjGrhBIBqWkiAZTCV+2BUCwlwF0xlEYxq4Q7wMR+/Mg6CfSo9gMNgVPUTYPedetO0yXAh3o+ylmfBi5r6QpCnwXk+vmV8Dt5imfEz47sGGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMLXfG8aIyxkm9LUAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function TextAlignLeftIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};