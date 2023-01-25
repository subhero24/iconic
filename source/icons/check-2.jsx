import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO7SURBVHgB7d3dcRs3FAXgq0wKcAlyBXEJKiHpgKkg7sBMBXYqsFOBS7BTgdTBugO5gxMwlCc/Y0UisJII+vtmMHyQRno53L24CyyqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATlySZ228auND/nbZxqbglLWQn7ex5Ha7n50XnJoW7Is2rnO33ZfgWcGpaIH+JYfZFpyCm3r/UB8KZteC/DadCmaVfafnfQbUifu+OEnZT2A/tvFD9bsqmE3ubnPe16ZgJiuGfymYyZrhjwdhzGTF8O8mzR6AMY8Vw78tmInw881aKfy7dUGbgpmsGP4XBTNZKfxLdHqYTfbLG5aMWYSf6dyE/ypjFuFnShlc2Cb8TKsF93XGLMLPlNK3mUX4mV8O38Yo/JyGFtwXGbMIP1PKeK9/EX6mJPx80/Lvt7Ud6lr4mVbGOz7W9jCnjHd8NgUzyr7uH7EtmFHGJ73bglm1AL9Lv/cFs8rYpHeJDezMKmN1/xLtTmaV8Y0t2p3MK2N1/8uCWbUAb9LvTcGsMtby9L5O5pb+0meJSS8zy1jp82NBrzzxubgZK322Bb1yBOfiZqD0KRiR+115d7/zIE9V01/6WNvPmAPD97pWlrHSR7+fMdnX+Ye4qBWl/30+bwtG5XCrlR3pX+uzROnDGtJnlRPSc/jd54tNwRrSv8F8qP5O/8RX6cN6WqC26TN0eET6Jr66PqwrY8uOl3S0RtO/uV3Xh/Vl/4rB6/Q5qDWa/ranB148nN3VNf0uDvg/r9LnvOAhpX9CfK/aPP1tTxNfHt5NQHtLoTtbo+lb72Piy+NpYbtIv5f/83d7r/7bgsfUQvcmfW5tjaav9jfx5fFl5dZo+js/m4KnkBVbo+l76uvqz9PKSq3RuPozqwy2RuPqz8wy2BpN3xdoUxyFs+Kv1mj7WGUJ9D18Ojs7e14che+KaoH82D5+q8fxa3E03AFuZN/avGzjvB7W8/aF+1QcBXeAGy2Un9vHT218rofzTvg5ahlrjd7lvODYZeyc3ts81iSbAyiBvu7nWr8U+r1gFhlbNfo1zvJiLulfNfpfNrwwn4yf4/WFV5szp4ytGt25Lo6WSfAdWt/+qsae3v5RMLv0t0Y3BbNL/6rR84JTkMNbo5cFpySHtUY3Back92+N2vXFacoRHLoHTy77/cD/PATjQ/avY7fsAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODp/AsqpqnlXM5Y1AAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function Check2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};