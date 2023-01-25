import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApASURBVHgB7d3rdRvHFcDxyxx/jqQ0oJXzPXoUECFKAfZRARGdAmKfNCAqBSRUA5GUAiKlgWiVAiyyAXOVAkyqAV3P5cwaSxgieAHszgz4/50zBknjubp3d94QAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi/YE1VJVu2lCuRfK7VDuhHIj/a1Jd7uZyqJuye2HUI5CObPbvb29M9lxJEAlBsE+kxjwD9PvN2U8lgxdKMehtLKDSUECFCwEvQX3LJWvZH5Wz6kN5Z3dhmRopXIkQGFS0D8J5WuJZ/oxz/Cb6iQmxKtdSAZkFAJ/FsrbUE61TiehvAilkYpwBchI49n+21C+k7LP9F5tKC/DVeGVFI4EyCCdJS3oraqzS4G/6CSUZzUkAiag82rOdfNDKE+kQEVdAcJBmkls/N1Nf7Lutzc1N7D0YqN2JtcbV4RlLEg0NqA+522pZ5DP0Xi2P9R6G7Vj+rvGE0N2RVwBwsF4LfEMuUonBXe76fwKtut1+214Hf4NH0tm2RMgBM1+uHkhfjYi2YbyJpTjcDCPZGIaG7M2QGX99Rb4BP3V2dD2N7mrQyUkwFvZTt24TwhrN5wP4W8rKdLluh+V7efdzKScgO8kfmaby3OSbu1vdkzOFqcv6Hxaxc1B6T9XI9MNwL0N7+2RZFRCApzKuAe7k3kwfEi39pofl9zXJpLdkhgIpg+ERspxPlFN0nQEGWF+TkoQ++yNzDsl7sn2nYb3/hvJqIQEUMEqFuBWVbDq3uQT0vTiRLwnsr3eLA2f5VeSEQlQLgtyC/iiGvxbTgYSgAT4BavevJQY+JOe6b0GyXAgMRncT0ECkAC9VuIgUSuVGSTCfihPPQ8lAUiAVioN/EXhn9Li6ZPnIbkT4AtBDla1eR7K4XVYdlgyEmBarcTAbwn8MpAA42tl3ptD0BemxgSwICp5ykE/Im2FoC9cdY3gEFB7adKZjU6WsG52GPDH13ltbI2N4CoTYMlz9MP2dnt38PM2WaB3Mp9zY7c2KtutemCaS9Qn622ZJ+0wcTuZb0HyPpR3V3nukpAAa9hGAlzy3P0kL9PIxc2ibix5iM0PGs4V6oO+81ZldL7edybrj5ZaIlijuYpkqDEBslMnKZzGxT1PdfsLYV5o4TsuhPe35/tI6kmW3aROUjAdJ/CHPtlrSKG0wgTY6SrQVDSemW1V2xhThpexOf+PSqsWaYVVoOtd/9oCjWuVra4+VfAb2wT3+/DaV1lGikuQABtI1ZGXkqcb1hbu/LvkKhGuQJ2kEBrr+yUopl2gtAH87Ch47l9CG0Bj1eO1lKOIBebKOIBfbQmgscFrdf7SpmPY2MWDnA3jGhOANoCf7WJR4lyk8zaBwIUEcEh17UbKdT+8xwPBlVEFuqJU9TmRzfQLYVqJ0yu69Nz9lA1rW2z6TTBWFfoyxyzUGqtA2amTZBJe+qWu70TjDNarvtZ+esy6DiQDZSqEnzpJBuFlG12fbZDrbjNonFN0qOv5UTNsPqskgJ86SQYaz8jrOJAN2Me159D1HMjElATwUyfJILzse/U7lC3QGFTrXAn+KxNTBsL87Ch47j91I1jXa/x2odzfVkNUY3XGxh4a8bk1ZWNYGQfYSTPxO9hm4KXn+kb8mCy3AgmwmneWZzfGlIS01tibVFPOUK0SCbDaXef9/yPjee68fyO4FAmwWiM+b2Q8rfh4k/faIQFWa8TnSMbTiU+Jc5aKQi/QCqW9v5KPF71AQGVIgNW8+wE1MhIt5Lt1dwkJsJq367GR8bi7ZAWXIgFW8zZqZzIe78BWJ7gUCbDaB+f9v5XxfOW8/7HgUiTAat4rgE1jnsmWhefcF3/16r3gUnSDrpAanqe+RxUzGe7OlIvk6QbdQSmIW/FpQnmqW5i9nZ5jnbXI72vYUTo3EuBq3onfd6EcpDny4qVxMYydUQ/Sc3l55w0hB3WSDDQuT1x31+d/hHLL89ZT8N9Kj11XIxNTVoT5qZNkousvTTQnGpdV7qUiw4/S/56K/f8/6GaL4l9IBsqKMD/VarZFsYaorQzbZDS2kzhd2or1LvWN5CaVhxK7UTcd8b2To/6vbIvip06SkW52FZjKgWSiXAH87Ch47l/A3qDfh5v7UqaTcHi+lEyUbtBr4bH4xwWmYO/pkcCFBHBKdeu/Snn+TL+/HwmwhhBoL8PNMynHs/CexlyKibGokxREY6P4k+Zjr30ghVDGAfzUSQoT3tLXGvfinJq95r4UROkF8rOj4Ll/CV+RtEjjqKttRXhHpmET4x7zNambow2wBRaIqfvR2gVjXqWsp8fq+w9KC36sSZ2kcBq3Un+hsX6+rfaBVXesvVH0mmClCuTnDeoSq0DLaKwWzUL5i8zX8l71vffHpA3lf6Ec5vjGFy/lWyL9djUBhgbJcDeVRi7O7z9LxeYH2RJMW8r4ZtOgX3Zoxzx8JMAarkMCjGnh8C0em5upNDJPuF9L/EbJ/v/fGNz/o1zcBaOTeXJa6S5LyhoT4AtBNQbBPgz0/gv2+ivL7fR7H/xjvId+JqtdqU7Srf3to1SGK0DBlgS8BfRM4rTp2+nnkhrGnfiWblIFIgEuWgj6YcBv+vWpJaIKhJ+Dvk/smcSAfyjjbrIFqTABUkNLa78QLJzpZxLP8Lt4li9ajVeAf4bytxBAnVSWCEuqN7b88YkQ9NlU1wYYaEN5lcr5U9l/SkuIJUFv+3v+SajeGBrBGyRAz7rjbC78O4mLze33edRNnBBL+uWHQd93TyIiAbaQAItaiclgZbjzwtaT4jODUH2/PA3Z1UiAERJg0VEqxzIfsFk2mrnqfSw7Vv0oaz8Q9VD4alIPEiDE/1uZ/ix5Pqw/uB1OAfiwcF+bKtCPqvY/N6lQndmM7V/6QDIqoRfIqiozmVZfTdlFi1eyTi4m/EeZT1k4lYvTFyzBbw1+ttKk3xv5ZW/VJidQe5+HklkJVwALRttr547Aqw/2fiapVfE6iVexo20vmkm11SYVq/LZv9nv5GLj/qox9UN4f7+VzIroM9TplxTWarhOoG/TtLlXh6XEuJfKLJTfy/xqsRhjdmebQPfHEla1FdVprnGHA+suJBGiPuA7GewpWvrimEFCWKfAE5lXN1uJVd7npXyG4oZR09VgX2Ii2M91z3lYj0VQKynoWf87nqKDS+O2H/2Swl1PhD7oq1kCuQtqWV9rCWDzZuyS2sjuJIMFvQW6TeewM30rmFSN62ttWkE/c9J6Hmr7DH3QvwnlXwR9XlWfSTV+Hak1sqxLzrvzwlSqbMheFztTrx7svGDVpGFCmKk+53AQqpN5nT57VyWW29mGZRpgGy4WX7YdSc+7X89QJxcHos7nG3GGr8N17GLsrxZWhtuGmH74f9H/0203uLVyRqADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBd8xPlW9aOBs8dWAAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BankNoteIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};