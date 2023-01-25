import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeySURBVHgB7dyBdds2EMbxcyfwCOwEcSaoMkFGiDNBs0GUCexMYHcCpxNIncDuBNIGyQZXoKBeXDexdSAAgbz/7z0+9zUSBYr4SAJHSgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANR2JvgfVb0If1ZheRWW+N/nYRmevGw/Ln+Pf7dnZ2cPMnNh2+O2/i5p+1fj/47b9Tls361gmcKOX4XlOixfNd8uLDdjgGYntHsYt+G57RsEyzF2/I2Wdx+WS5mJIzo/IViSih1/dh0mtO88LA+GbYrhPhfMz7izr7S9q147TWjXndrdCeZFjz/N17LTzs4GOu1gcCWYh7CzLnTaALeU2IYuBsmhHR91uo+CvoWd9E77805OSMt0/gNC0CtNR/5eneRMoHUOCCcNdK5FF8I0XW/fSypk9ehbWF6HAtNeGhlDdy91vJ5bMXCxAdA04xJ39CB920vqON+ksgYHhOaBnuoXWa54XTpI/wZJba1q7PwbqXs2jOve6IwKZYs8A4w7YCfTbcPy5/h3fzhKj2eXi3F5K9/vmZniTVj/Vip41PkHaWMvaXv2gvZ0+lz/jeUopqm+cKvTbKQCtVd5S6FafArhS7/UfDudMDOj0wttKylM86q8pVAtbk3TkSdHPIJPPmJpOuLmdrqiZwE9zS0fT1EtbkXz5/yLH6k0/5JoJQVo2ULXVBTKWtC8TrfTCteqms4EO7W7lom0r85/QAhq07wON0glmndG+ioTaJ+3fRzMslo8C5rX2W6kMs07K2UNxLXv2z4OunpabkmFsJXYfZL61mK3EiP9Ptffu412VChbUgAGsdm2KNSMn7EVm1eWF+v0Km/ObRi5t250VS1eUgBMnUZShbcV62dZLxOmVnnfiF3Oew4GSSE4eaHM8xmg5V2LW7E5umNoevB+kHzvc+7gHN/zXvINYfkgKEPtmh19NE2JmhjWnVv4i9aP1pPVvrgOzTeHMcs8qJE0pka11vvIulT7dEIIBGWokTSmRrXWO7ou3T5NPypmJie25OcBvNiKzZdw/V782ntc5xexOfnTYwRg/v4yvDb+jumUgetL4rotnfqzoAw1ksbUyLDeY+85iq8ZnllPkfap4ScWBeWokTSmRsZ1T/5RWzWq3R4YqZE0pkaSQdPDQI+nRTeaZmhenPJVoyOaM6k9rSzmmeBjd8pBGLQ13Xba1ycGwXCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXCABcIwBwjQDANQIA1wgAXCMAcI0AwDUCANcIAFwjAHCNAMA1AgDXugmAqp6H5WNYNvrdfVgu5QR6aw8WLHSqISw7/bn4b8ML6zCp3Z6a7atBjQTl6POdTY/pdGr0zHpe6vyP23Mux29jkfbVokayECe/BNJ0STEc8dL4mjtLp8toS1z3Fzm+PR8Es9bDGOB3w2svwnIj9cR1vzK8/jcBptA8V1PX84P3X2kGOZIaSWNqJAsx12nQD2EffJRCxnVxOeNQDwHYSp51iRCM61hLngepRCuOdU75Wb3pIQB/Sb4YgneSaXzvWvJ9Nrx2LzaDtHNhfP1eFqKHAFzLtC/0NnRk6w6U8T23km9/dnZ2a3j9N7FZSTsE4FRCJ4od441M+1I3YpfznoO9pDZb/C02b6Ud62dZt6VbXQyCQwj2kjqU9Sh5kHMNm3vd+29gxzZbWMcLKzVWm3OMn7ESm70sRDezQI9C0Luczh9txa7YTNcz1mK3FdQRjkiX2q9LmSC8/6vamcc3hvYMareTBemuDjAOLD9Jfz4ZB70/8ofYVbn9Y1xnzjhoK6gv7KC19mMtBYT1rDRP8ds/wjrvNE+1MxKeCF/2tZ7etRSk/32+wKLImUDTcw43mude0JbmH6lKuJPCNP8sEO10wsxQeO+FHner989cCtrSdMS61/YetNItApp/Fji4UUMQNA12b3WaRQ1+D85kBsadHQdsg7Sxl/zpzheF7VnJtELcwTYsf0qqMTyMRcXDAHeQNL//VspUlX+t9X3gCHr8k1pT7bRNAaqH8c2xio6DejKLM8CBpo4ZB2K17l6MR9DXLY50mo7ScVsG6dte0neSW6Xv2qwCEGmahqs1GxF3dLVbnJ9qEOipmh0QTmV2D8SMHfS9lPe+ZeePZnD7xxuu+zulZQtlazkh7fP2j0tB37RMCNbSAU1z9Dn3CpUW20C1dy502mxKV7Mb2m6m62d22mAGDIVpXrW4eJW3BE2Fv1NMkcbPdPts8KypvVpcrcpbirY7G2w0FeYwZ2r7ScNBZkLTALnGrSAbOv7CaIUfte2FpkHyrU47K8QB7jUd/7vZFcKOoWkKL/7k4mE2Yyvp51eul1DR1DRLs5JURX41/h2evGwvqZAVaxvxIfZt6zoHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA9A+fuMKI12ByfQAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ArrowsIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};