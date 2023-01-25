import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR5SURBVHgB7d3dddRGAAXgcSogHTgdkBZoBKcDUgHbQhqIqYB0gE8asFMBmwqgA24ktGQ5YLM/M971SN93jk4eAg8jzd3Vaq6GUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgG4leTYcr4fjJlt3w/GyzMwwpofGezvH8bLDcNEvh2Odh43/77LMwGby/7JjvO/nMl522GPyfx2CZ6Vzwxgu9hyvEMzdcIGf7zkZvliVjmX69P/tgPGOIXhemJ/N5P+Yw9yUjmX69L87bMj5IAQzM1zQl0dM/s9KxzYBOMan+HE8D5vJf7TSsYoAfAnBq0K/Mj32q3FXOrYJwE2ON4bgdaE/DSb/qOvbgEw/glepIwS9SZvJvy6dyxSAn3PYk6/7CEEvhgt1nXrrLGshbF9/Fp6mTEv916k3Pja8LDOStiF4mxksEM5Kpsl/6PPu+9zN9eJmezvU4jzdzvU8dSdTtaHFRX0z94uabQj+Sj3ViXPL/r2eXd6UBcn0ePRN6gnBuaTd5F+VBUqbR6QjITi1HF5qe8iqLFjahkB/6BRyXKntPqtCyxAo0T22VJTavnFV+F+mEPyeekp0jyWVpbaNMTxXhe/k8HcHHqJE11raVBvGye8r+gcyheDX1H/Lqk60kka9npj8e8k2BOvUEYJaaTf5Lwt7S7vqhBAcK0ptZxUluvOIUtuTESW604pS25MTJbrTiFLbkxUluscVpbYuRInucUSvpxtp2x/yTT2chKvUWxVOJu1CsCpLl/r7/lXh5NImBO/K0qXOVeFsUl+i+1TO7KfSN/eQ5/excLzU7Vw2stR+BmlzC3Rbli6Nfkyl7208u5J2O855dyDT6u/71BsvyEXhUaXhY9DCJNNCWIsQXGdarCm0tzm316lnIexbaReCcbl+XLYvtJFtFeI69cY+0GXhe5luh25Tb1xbEIIGogx3WplC8Db11pmqvIXjZFuHbjH5r2Py7y/tXogRgiOk7bsA14XDpc3ThnWE4CBpO/lXheOlXQjGF70Lu6XNS/GjVaFephB8Sp1xqw8h2CF23nuahhP6KvUhGF1FCO6VNjvvjdfoqtDeZvK2CMHYYCxspc3Oe+P+oFeFx5PpK/pD6ukPbaTN/ks2xz2VTCFo1R8qS5Xpac/r1LM9+qmlXXVikSW6TL0e/0BGz6JEd7BMn/pKbXMRJbq9RaltnqJEt1OU2uYtSnQPilLbckSJ7jtRaluWtOsPdf9Jl+nTf516q0I/Yueyz2LnveVKfYnupnQudt5btlSW6ErncjyltrlIRYmudC7HUWqbmxxXout+57IcvvPeokptve8NureLi4t/hv+8GI71AX/tj9K/vw/4s/8Ox4vNuWKOsn91YhY7l2X/nffWUW1Yhq9C8NDvglmVvPYY79rkX6BMP45vNxNjPN5lenQ6y6X+pY0XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACW4j/kk/STuMw1NgAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Code2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};