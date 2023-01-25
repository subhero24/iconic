import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgB7ZiBcYMwDACVXgcgG7BBs0GcDbpB2SBs0G4QNki6QTfgMkHSCWADsoEqF/cqXKfG2NBw9d/pQsBYsiVh2QCRSCQS+c8sIBCImNDPI8maZEWSkiTq8YWkJjmTHEneFovFBW4BMjwlKUgadGMv34W/Qs44yQ792cHUqFmvDMaUJC8kgs+uGqy8l5OcDO9VOJU3SNHKYLw0XDj0IdQ7+iBWMCaGmZdxn8NAlEeayTyhGR9kxgweldcJhAa7CdtgQHerQXBPhE1sFTqcwWHzi45c05FCKKizA+u4hJHAbmIXEAJsP4Ec4fj+V+JbExTbrxMPU/9coE4y1ukJHMF2XeAJmlral6x9Zuke7sCOYNev4M4B2jpIkpKUlkEc2fUafMHuyilgAPhz/bjqCS2MrB63VqMyFuG7qlzqVaQyJAM7st0T+1+TbKi/2tBfpf5e6PkSfGCzgVee85l1pRqik9MnB26a+x5tZMh8hpB0r+5yYgMeIaQ3wu6n03/Tc+tJ3CeE3tm1AEeUoXL1TtWtGgzJy+A11hl8we5C5lxGoPtCxj2egS/YlhLN0DDC4aUEYqiyGttN+2AvOOgpmZ49hAKnKae3mo4UQqJ5YewNTZhSWlOS4Jy3lEpZ6E39Fqfc1Cul8z1WYQZcO9iS3/BcGZho7eW9Z4Ph08y8YRAyJwr0p8CxYr7nQOTsHtCNRhmegidjHK8LkgeYy/F6JBKJRGbNB0m+TFp4NOZWAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArrowRightCircleIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};