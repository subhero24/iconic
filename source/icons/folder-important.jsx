import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcFSURBVHgB7d3vcdRGGMfx51IBVJCDBuKQAnK4gMRDAxAKCH8KgCMFYLsBbFcASQH4yPvYpAHfpQHsCvzkedB6MAw2t9Lqblf7/cw8o8nEHnyn/Wkl7a4kAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+jaSgqnqDdtMQn1vtWF1I1QuFqHOrGZW70aj0XtBFooMgDX8iW2ey6cGX5qF1b7VgYVhIcAyrOFvWc11WPasxgJcxRuI1aEO16nVY8HKZX8KZA3jkW2mUuapTqyZ1W+cFq1O1gGwxu/n+VOpy8LqLiFYjWwDUGnjv7AQQrASWQag8sZ/YSGEoHfZBSCc8+8I3NzqjoXgTNCL7yQj2twOnAou3LJ6JuhNVj2ABeBYmsEtfKJWm9YLzATJZdMDWON/IDT+r/GDFL3A0Gm3EV4fSNrRZqR4LJmwv+WG1cSvazp+vnOr+4JhCg23rdfaTIrLnv2dDzoE4aSUz4lIoRG3Udz0AW2mdcy1nalgWLQ5TaiqMYTPPNd4H5ReYFi03enPnhTOPsOGtjMVDIc2F6+xxjIA3pg13oehfH7Ix0ZwqHGKP/pf0OZU6FTjvRIkkcM4QOw57RsZiDDFYVfi+d2kiaB8LY6Agxos69ALvBWUTyPJAGkzPhDLB8cmgrJpJBko+2jHGo9eoHQaSQZKmykTsZgi0dHaZ4MOuVEPkF+0L8L2X2nWMM9KXq9AAJCC35nzZxwVd4eOACAlX8H2woJwIIUgAOiDL2y6V8J65qyWRGIwfrQ60gJm6xIA9OWm1UttnvCRLQKAPvkp9vOcQ0AA0LesQ8BFMFbF9/NTuzDO6plPBACrdCrNg74WkglOgbBKfmGc1VoGAoBV8zlPW5KJ4k6BrPss+r1mpQq7yddijK28AXeZhDe33XhbwGzQEvlu0ObxLvvaDmsZLmgkQTZCENos7HesZXAaSZCVEIInGo9nHDmNJMiO7ZaRxj/dz0+DfpU14y4QUvAD00NpFsosy29mTGTNCAA6CzfmvPHHrgMYy5oRAKTivcA7ifODrBkBQErvJc7aL4IZCEMyfjFsm/OYX7HdudaDMD0AqkYAUDUCgKoRAFSNAKBqBACpzSJ+Nva2aXIEACnFDIb5z7Z5OciwaCRBtrSZGXpTl3sD5olkgB4AyYQxSl/4vinNU6SvMg8/A40kKELoDfzNN5df/HGozQKabNYBMBUCVeMUCFUjAKgaAUDVCACqRgBQNQKAqhEAVI0AoGoEAFUjAKgaAUDVCACqRgBQNQKAqhEAVI0A4DOq6i+x2/liWaMvatmzGgvSUlaEZcFXaVltL7ELXua0oqt4GkmQXGj8xxG74YgQJKKRBMnpckf+L70UdKeRBElp87rTNgbxqlMugjGVdvzhBGt/yV1XBABdXlNUfAB4LErlYr//L3993W946YoeAFUjAKgaAUDVCACqRgBQNQKAqhEAVI0AoGoEAFUjAKgaAUDVCACqRgBQNQKAqhEAVI0AoGoEAFUjAFhIe++lcAQAf0p7BADFaxsAX0v8hxSOAFRuNBod2mZH4njj37XfXQi60UiC5LR5NOLRkrvAH4j1j/JoxDQ0kqAX+unhuOffaPzbNP6ENJKgV9o8KnFPmx7hPNRJaPg/y8DwYCxUjYtgVK24AHAWhJRyCMCZxBkLkEiJAejyNGPgMzkEIHY4/S6nQUglhwD8J3HuW90UIIEcAjCTOD4I84peoB/+vVqNrihBYmEE8lTjPWGHpHOp4fsp5q5+/T3BtwhCD+wLPdR2puyQ7kLjv6nNC7K/ZTv8rCARbd5O3taeXjoysWPihQZd5XuCs5lWYF/oiW1uSXv7Vn9Js8Kp+IUa19CUs0H8wGGbbatHEsenUD8pfWZKTgHYss1rwXU82LtWB5IoCPa9j20zl3je1W7a3zCTgmUzFcK+yDe2ORRcZ8Nqz+pjb5nodG8q7Xj6tqRwuc0Femh1KviWsdVbaW4Jd9VlZP0XKVxWAQhL7IpfZ7oiY6vH0t2GtDeWwmU3G9RC4BdXLwTLGNwClVXLcjq0hWAqhGAZE+luIe3xWJS+XAoBN/b79U7aIwB9CiF4KlwYX+VYutuXdvzAdCCFy35FWLgmuCPNzqY3+NyudBTu48eOv/h+2Lff7dJ7ZKGoYTy77/3ANs+kuftQ++L4uTXA25JAmNZwJMuPxPs4xE/278cuZspOUWuC7QvfDzv9njRHLZU6ewUfud2UREJD9l52X67/Pv3/+fc+iMbvij6KhiPXRJrbgT6g4/89ljQDRDmaWf1ttdNXA/SJibb5XZrv9eJ7PAv/9u4QTnsu4xk7+KowzeJjAIZytAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACANfofI5+Hw9R/1wMAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function FolderImportantIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};