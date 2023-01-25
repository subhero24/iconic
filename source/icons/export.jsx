import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUxSURBVHgB7d2LcdRWFAbgs6kAOlgmDSQpIC8qSAU4DQRSQZwGEmggYdJAOuDRAKYCmwoCFXByheSJIRjvXWkf0v2+mTPLDCvt6/wrraR7HQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAwmXmr1C+lnuZ/zkrdC1iy0uTrUhd5ve7/1gFLs0HzCwHLVNH8V0NwK2Dust/nP8t6Z0LArI1o/ksvhIDZKs37d473R8DclMb9M6cjBMxHadjfc3q/BRy77E9y7cLbbt0Bx2qHzS8EHLc9NL8QcJz22PxXQ/Ag4NBKI97Lw+hC4AI6DueAzZ9CMI1VsJXSeF+Um7M4vNelvl+tVi+Dap8F1YbmfxrH4XapJ8NzopItQKXsL1XuvvmP7RqdbkvwVdkSvAo2ZgtQYWj+7pv/GC9Qu9wSrION2QJs6Erzr+O4XUT/m+BVcCMB2MCMmv+SEGzILtANJmr+X6Peo9jeneh3h4wlYHs5fkBL5/GwrirDMo9zHANq2E5O2PzD+qoMy6xSCDiEHD+a670xvVlpWKar2zk+iAbUsLkcP5rrfwPas9KV5YSA/cnxo7ku8iPH4rPSB8tehuAixzGqjOvl+MuaL/KaE1FZ6SPLd3Unx4XAWAI+LnfY/MP6q1yzDiFgernj5h8eo8on1iMETCf30PzD41S5YV2XIXid2zOqrHU5fkBL14AbXYaclTZYX1df5vgQGFDTotxj8w+PV2XDdQoB9brGzfFOKh+zSsV6u/oxx/knDahpQ/bNP+Ybs3MSlbJS5bqFgJtlP0//2OY/jS1kpaiUfQh+znG6EKyD5cn6P1LxMaexpawUW8g+BKc5znkKwbLkgZt/eA5VYkspBHwoD9z8w3OoEiPkdCFwGfXclQ/xJMc5jQlkpRgp+7EED3Oc02DectxlxI9jIlkpJpDjB9Q8CeYtt/c4JpSVYiI5LgRvY+EWPyvEls3UTTP43Wq1ehMTqX0e5bEn+WyGh303Z1Cp2uP8WZ7GoidOaGFWiGdRZ/LmP6QhR+/mD43+tdVY/HyjLQTgecV9X5X6YSnNf+mDELzacLFu0zFmahaOQfazO1xssL/b3WcdO5KVYgeybizBebAMefOJsIvc8YmfrBQ7smEInAhbouzPCVw9LPo0+xNGOz/hk0cSgCvP56Dvx7EwN+ie1Db1VEeB+DRzg9I0AaBpAkDTBICmCQBNEwCaJgA0TQBomgDQNAGgaQJA0wSApgkATRMAmiYANE0AaJoA0DQBoGkCQNMEgKYJAE0TAJomADRNAGiaANA0AaBpAkDTBICmCQBNEwCaJgA0TQBomgDQNAGgaQJA0wSApgkATRMAmiYANE0AaJoA0DQBoGkCsD/PKu57FuyFAOzP84r7PgpYksy8Veo8b3YesESluddDCN5e1/zdfQKWrDT5SakXQxC6elLqtNtKBAAAAAAAAAAAAAAAAAAAvG8VC5GZl/9czGs6UrlaLectXsQrGZr/dqn7pb4p9W2wCy9LPSz1VywkCEsJwJ1y86TUOtiHi1J3u9u5h2D2ARi+/bsPZB3sU/eef1UC8CZmbAlTI56E5j+Ebqv7IGZuCQG4HxzK1zFzS9gFyuBQuh/Cs/4SNTs0TVtCAJ4Fh/IyZm4JAaiZd5/pdLueD2PmlvAboJtR+UX0RyXYn/Oy//95zNzstwDDcejvoz8u7Qfx7nXvcfdHPO7GAizquplu3v1y81OpL4JdeBb9LuejuZ8AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9udf0cjh+TO7mSkAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ExportIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};