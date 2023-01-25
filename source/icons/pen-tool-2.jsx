import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAheSURBVHgB7d3rldxEFsDxO3s2ALwRtL3fd3l83+0DAfAKgIYEbAgAjwmARwJgCIBHAswQAB5IYGZIABMBl7qWgKY8jfuWpJJ06/87R2c+2C2p1fW4V6pSiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIKqPpe2+2k70z9dpO0tASJLhXyTtis9zP5tI0BEzyj8+5XgOQEiSYV6p8c7FSCKPu6/clSAC0IhhKBdwvtYy9wXYI20S3gvdLhH9AZYFX323R6vSyoBVkH98f6xrCfg7hCWLRXSj3Q6HwqwVKmA3tVp/Zq2e4LRnAhGoV2MfpG2qcOUx2l78eTk5FowGBVgBNrF5lb4N1LHlXSV4BfBIP8QjMHu12+knttpe1+AuVWI+8kHJkQINEDFuP8Q8oGBqACFZoj7DyEfGIAcoFztuP8Q8gHUNWPcfwj5QCFCICedP+4/hHygABXAQZcT9x9CPuBEDuCzlLj/EPIBTEOHxf0fq1/JZwz5AMal3fj+0lldV9oNkfYaMqz6Z2X+AMYwsCA+/r0gqlP/mdtaXvFsEg3zBzCMDhvff29vPy79Z2x7V8sxfwDldGDcn+3LZe9zJ0o+gNp0hLg/25/L3udsu6XkA6hFR4r7s326ZJ8lH0A9OlLcn+3T5YbPkw9gejpi3J/t1+XAPsgHMB0dOe7P9u1yYB/kA5iGThD3Z/t3+Zv9kA9gfDpB3J/t3+UZ+yIfwHh0org/O4bLEfsjH8BwOmHcnx3H5Yj9kQ9gGJ047s+O5XLkPskHUE4njvuzY7k49ks+AD+tEPdnx3Nx7pt8AMfTSnF/dkwX577JB3AcrRj3Z8d1ESclH8AxtGLcnx3XRQoo+QD+jlaO+7Nju0ghJR/ATXSGuD87vosUUvIB5HSmuD87BxcZQMkHsE9nivuzc3CRgZR8AEZnjPuz83CRESj5QNt05rg/OxcXGYGSD7RLFxD3Z+fjIiNR8oE26QLi/ux8XGRESj7QFl1I3J+dk4uMTMkH2qALivuz83KRkSn5QHy6sLg/OzcXmYCSD8SmC4v7s3NzkYko+UBM2oU+pSaJ+7Pzc5EJ6fB8YCtYlvSjPNQyV1qhW1cnmZgOCxe/lSBCrBGmXex+JX62ltYLNRaW8xbqdE6T/zZavuCffZd/RViLLMoaYVsp86DlVRX77/5AyuwkgJYrwCepAEwe+y9dfw0+ER/rnf4jWIbUlZ+pz5VWvp2nTlKRluUDjySAKD3ARnzeZi3dP/XX4m3xCfE8oNV1gq8FuSYbhFYrwE6Qe018QlSYKBXgB/G5K8i9JT4/SQBRKsB34mNJ31bwRLoWO/HlUZake6/5IrXaA5j7lW+2nDv+74XU5W39zblgOdR/K9RUu5ORjnXqOK+SAll6XiVjqC4Fy5J+lHvqZ4VSatDuXvvlEedUtXCpfwyVDYarVkFxpL6Aece52/+v2QtYa3vZF6IbC79WnHSi3dDoK/VhYsxSadkQ31elsnTMXdoe9RXBtm+1641qP53eqd+ngmVKP85W/c60bjK8CNq1/mfqY5X1ecFyaVkyvJXGaFnyG2L8z76IT4K/Eb/XtL1e4FR87AJ5R42iNl1BMjw3LUt+Q976DNcD9CMbPxcfK/w7acdO/CNozwXrkFqr59XvTBsIg/rW/0J9LPndCNZDSYZvpGWNQ5hJ8LnIw6FLErbQyXD/3bzvP7IPeUNKzE1Jhp+ijPt5StgeoE+Gvb1A9GR4K37ngnXqewGvMw0YBmnZrU+S37VTkuEntGyYSNjktxmFP/xXGqgX0K71Lxn2XH2gICagjSfDSvJ7UCtvhShJhiOtiLIVvy+kASFejvssfWv+WHzsLtKtCu+onZR2oZy9OHjj+Vja7rTw3tQmeoD+lui5+Fil2cr6bcU/7udhyy8NDkkbnCyjXfL7lfptBfFo2YIQq02GtSz5LVlnYbVaezViyZiWNSfDO/E7FcSk5eODZG207Mmv2UhDmuoB+mTYO2VyrcnwTkh+kdMGkmEte+OD2UpjWnkOYH/2v6uNcdmKzx1Zz7oCm7R5n+Rep9b/tjQmdAXYK/jbtNm4lv9LVzhY7fxmFiLai4Z/TNvXqUKcS3AhK8Bewb/bbxtBiWvp7grZsAhd+1Pxm4T7Rn3ht678y7TxFrNx2LOBV+xvtEoQ6i5QX/h3abM3mFH4x2MNyvcScM50mOrc/zCvS9fyYxp2kW01yc+j9ASRKoC1Utbyk+BOy0bVvpQqQIghEyEqgJYN+UU5W8LpxQi9QJQcYCcU/posvwqxSszqqzCt/2zsmt9Zey8QoQfYCoV/DhsJMGEoQgXwrnCOcVjTv/pr/09Zv/+KX3trIh3HG8/8TzAv9Y/v/0wbWgzjWNrNHvtMfX6WlYuQBHtb89uMeb+Z+t+eYeODVh1GN1cBTiKO6BqR83quvgK0NicY+AsqAP6QGv/mesfmKoAGG82IYVrsAW5RCZ7WX5ONNCbCcwCbxue5rflh2j5IP/i1YJ9dw/vi84usXIS7QDYykckv8zhLd4FelhWLEAJ9J5jLj7JyESrA14I5WNKw+msfZUIMw6Hrswnyd2TlotwFeiCoyVr/Uwkg0pxgmw/8gqCGy9T6/1sCiPQc4A3xL4MEP7vGr0gQYSpAP8LzPWGs/5SevBYl0mjaUE+C0w/zUOgJpmLX1Aq/9/Xyixb13aAb6d4AbX8Z/jyMtfr2sPHNiPMoQo4Fsh+qv0X3jnRvLyAs8rNrZtdul67lS1EnEbWyPsBWutej2/xhGzbBlMib2diea+mertvr0XnKDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvsNq/5SFnKQG9IAAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function PenTool2Icon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};