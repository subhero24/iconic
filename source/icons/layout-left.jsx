import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAADddAAA3XQEZgEZdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMaSURBVHgB7d3xTdtAFMfxl6oDZINmA+gGYQM6AWICYALCBjABdIKWCZINoBPgTlA2cN8pJxFFytlFfu7x8/cjndLq+MPnn+5850h5ZgAAAAAAAAAAAAAAAACAocxsZG3bzv3j2NtZ/lx4m5umV2+Nt2dvj7PZ7KeNbLSAc7AX3i5NN9AujbcHb3ce9quNYJSAPdylf9zbdrZiG/S5h7yxYJ8smIebZu3aCHfXwtva7821BQsNOA/g1nDIyu/RpQUKW6Lzsrw29HEStVyHBJw3VE/GstxX4+1rxMbrs8VIz91Fj79LA0pHh9+m6cjejoIlqT8t1Sv7CHwGv7Rlf6KfPTVJY81j7ron9R8f/SJPewzk2CYmjbntDnlptfOLfOgYxGRm7r48k0vurXZ+kU+FAbzYxHXM4icbWMQ5eFHo+2V4LPQtbGARAZc2Cs+GptA3+CYr/FUl/q9qA/bn0dzb9c4za/0hdpmViXrRMYQf3pY7/0//XnrIJ2N8C6OiyhmcZ+ryQHf4NzBKal2il+/swx42WeIIWBwBiyNgcQQsjoDFEbA4AhZHwOIIWBwBiyNgcQQsjoDFEbA4AhZHwOIIWBwBiyNgcQQsjoDFEbA4AhZHwOIIWBwBiyNgcQQsjoDFEbA4AhZHwOIIWBwBiyNgcQQsjoDFEbA4AhZHwOIIWBwBi6s14M07+7CnyoDzzwVvDnTfGHqreYn+5u3O3n4Cf2OBJeBUVfuD4LnM22VueCc2WeIiAi4VWPxiKFV9G7w4ZUTATaHv1HBU6GtsYBEBl4pfzSde2q6rKmv9daVSQY22jOKUh9W/wuV6R31KqU6pvOxFj3sSUtcxqgL4yvqVv2lsuyyp1jRMm8o0K/uUrLvxo+HKBkaJ9zo0FlTiPeQcnC/03NDXeUS4SdiLjvxK8crQ5Sby9WvIEr3rH57HU3Tl4d5aoPCAk3ZbizCVL18Yksa2y/LGgo0ScJI3XulodGbTDTo9Z9M3ZLdRz9x9owW8Kx/oU0uv7RYWUPm6EinExrZHwe/pc6xgAQAAAAAAAAAAAAAAAADD+wvASF2ZoQB89AAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LayoutLeftIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};