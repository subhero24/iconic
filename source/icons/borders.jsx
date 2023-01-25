import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANJSURBVHgB7dzdcdNAGIbRz1SQEkwJVADpJFQQOgBKSAd0YlNB0kFUQjoQq7FmCJMJscRP7H3PmdnJRXy1q8eWJWurAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAf21TIcZxvGh/rtv4MA+eumvjZrPZfKsQEQG0g3/b/uza2BbHGNq4bCEM1bmUAO7Lwb/U0Ma7FsFDdexNda4d/Ffl4F9j28an6lz3AdThvJ913lfnuj8Fap8AY7FaOwXq+hhJ+ASAZyUEsC/WuqvOJQTwvVjrpjqX8B1gugF2W64ELTW00/+31bnuPwHm69iXdbiuzXGGOsxZ9yK+BE93NOd3s48VcF77B/ZtfK3DDbChAAAAAAAAAAAAWGb62XIbn9vYjT/dzg+1c2as5wLTvj3T1iXj8+7nvX04A9ZzoRcm6/GkXRQnz3ou0Cbhajzel+KkWc+FxsN54bF2xUk7t/V89WeCp1lY8vre96k5d+e2nvYFIpoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiCaAIgmAKIJgGgCIJoAiCYAogmAaAIgmgCIJgCiCYBoAiDaKQSwX/Dau+LU7Re89tXX8xQC+L7gtTfFqbOeS4zjeNHG/fiy++LkWc8V2mRsX5i06X/b4ixYz5XapFy1cftoonZtfJneVYqzYz0BAAAAAAAAAID/ZVMh5h9gXbfxYR48NT2gcrPZbL5ViIgA5p/e7trYFscY2rhsIQzVuZQApocvtsUSQxvvWgQP1bHuH4qffpNeDv41tm18qs4l7ApxXaz1vjrX/SnQ9BhSsVo7Ber6GLEvENESAtgXa3W/D1NCAEv2qeFX3e/bk/AdYLoBdluuBC01tNP/t9W57j8B5uvYl3W4rs1xhjrMWfcivgRPdzTnd7OPZX/R39m38bUON8CGAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+At+AAONxxAY8vamAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BordersIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};