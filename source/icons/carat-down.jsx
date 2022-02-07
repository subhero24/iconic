import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPYSURBVHgB7d39cRtFFADwJyoIHchUECiAsVMBVEA6wK4g6oCkAQINkA5iaMChAh8VJFTgx96cmHjy4Ui7lnUfv9/Mjv7S6Ub39vTe7t4qAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxmsVC5GZj8rLz6Wdbhsfe1Pai9Vq9XssxCI6QAn+dXm5LG0d7KIr7UnpCP/EzC2lA/QXdB3so//Oviud4N+Ysa9i5krwPw3BX+OktPOYudl3gBjyfup8HzM3+xSo/AJkUCtLCjTrm+QSfgHgs5bQAf4Mav0dM7eEDvBXUKNPHV/EzC2hBugnwPoJnnWwj67k/9/EzM3+F2A7jn1W2qzHs+/Zu9KexAIsogjezmheBLvoU5+LJcwCL05Jh55nvV9iAsp5rvpzzXqbYL7KBb7MeqOeGS3n17fzrHcVzFu5yOvSuqzzrrTHMULb4D/Jetc5LBpk7sqFPs16XQ4jS6NxK/i7rHPTfyfBcmRbqvAqRiSHvP9V1tsEy9MYNKOoB3K4+2+y3q/BMpWL/yjr04beaRzRNvjPsp68f+lKADzOobit0R0rgLI973+bgp9ettUDl3Ek5bPfZL3ZP+zCHnJik2TlM59lvecBt+VQD7TcUX+KB1I+62nW6wI+JYdJstp6oH/fOg6s8Ry7lPdzlxzxJFm2j1r9EPAl2Tau/jIOpBz7t6y3CdhVjmzRXLYVvUcbqWKisj3duLdFcznMVdTqUt5PjXsIvOZ6INtWr6bgp0keeZIs21KxTUCrbCs+n2XF3lzZvshtEk+wMQE51APXWe9sn06wDf4fs15/rqN6ZoGJyyEXf5t1+omrk107QVrkxhhl2xKEfpnFF+/KOTzc0mW9B1uSwQJl244L/XvvOnbr8TcBh1YC7XXWO/9UJ0g7OjAVOdQDtUVxXw98e7sTpB0dmJocFs3dZJ2utK9vHaul6O2dBjy0bNxZIoc7f+vD+ZuAYykB+EfWu8iRrjxdisX8T/Ch5DC02RegJ/GwFvNXpoxcDovmaifJapjsYlyyrR7Ylx0dGJ9sm8TalUVujFMOi+au8nCuA8Ys2xbN3Rn8Ke9nCrJtZ4nPsaMD05Ft4/sf2gRMTbYtmvvf64ApyvYnyeT9TFsOk2S1i+bWAVOXdZNkm4C5KAH9co/gN9nFvOTu9YAdHZinfP8k2c0dwb8OmLMcdpe42naEvvXDpRt3fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoMZ/1tbS7Ib/adwAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CaratDownIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};