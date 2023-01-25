import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHdSURBVHgB7ZiNbcIwEIWPTsAIGYERMkJHYIOyQbwBbEA3YARW6AYegW7waitOMY5t/EvSyp9kCRLn7j1yji8QNRqNRqNRAQB7MW5icPmZ/gpCbC/GFXPWbcQj3OQiRkdrQYoR49MiVJYPU4Nbzp8XNSKSb8UYlFCTkzxPz01CxejolYiEHw7hV58YjxGOV6wPjHXOHcL7AnHqGEGlJwvGRy2PvZOxSQZLgmmBbqkAIs7BYWSgXCxBz6WEG3nk+riYyZ5d90bx9GqUpqsSF27yb+89x9GVhHIx4nHL944SUWXz5ctBuRjBbXUqE+4pEnHNO+Z7yRXjBlnHgHaMYc4xMJ4UaCuZgy9nUQPqeIfIkoK7ZHbGvOkHYlTLgCbIbA1u+q+pzbW1H7Iciz+SzcROA9qcA+KwmlzMgJpnKykbcs6OXkWoATVXLtCTR/xDm12CzbMJuvCNgFZGSiuxKhYzgHuXO8ScS0kUvAZS4+pCYbTvlEtFA+ZuPmD+7sEol1oGVGxbS1JOvEpSzYCKz3LEhyziby1ZT+VB4LHE6I8bE0fBXRT29+3fNUElwNgi3JDGECF++hcv6PpYE/tUE56YD+K14yzk+hQTU+vMEQ7zxHP2/Cj5PtBoNBqNf80P9uRDG/GwoPEAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function MailOpenCrossIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};