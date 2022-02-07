import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALdSURBVHgB7dzhURNBGIDh1QqgA+hAOrEDKcEOSAeUgBVIB9hBsIKkA+yAz9u5U+MMSnK7XLJ3zzOzv5jh1/sxl/vIpgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCgiMjnrDs33fkWf6y78ynBXA3xX3ZnG/+26c5FgjnZM/7dIThLMAcHxv/LKkHrRsafPSRo2RD/eXce43DPCVpVGP8iBuB9YpZy/J3z7uTHmA9pnO8JWtQNwLvu3MV4z2EnQIsqxJ9tErSmVvxhEUZrov/Qu4oy4qc94mexxM9iVYr/qTtjX5XCcYifxRI/i1Up/rzo+pigJUP811Emx3+doCXiZ7Eqxv85QUuG+K+68yPKrBK0RPwslvhZrBj/PV7x0zbxs1jiZ9EqxX+XoDVduBcV4v+SoDXiZ7Eqxf+YoDXRX1M+9uKq3/GHi2z5n3j5PvwcztHuvhE/k4jXHzHyzy7ShCrFvxU/r4r9nq+3Uw5BlN/dsw1fYuc1cdi/EE/yOCF+JhOHP2bcpzckfiYV49ymNxD9h3DxM50Y7yZVEi6u4lji79eeh8rRphLi56gqxHc9dgjC3T0cW/Tv2zdR5urQIQjxcyqiX4SVDEH+SuLlvkMgfk7OMARPMd429hiCcGsbpyr/RR3iepMhCBdXceoqBJoXa+cv/F7x04Yof0S57867nd9XI/7MrW1MI8qH4Db68N3dQ5uGiIuiFT9N6+L7GmXET7uiX5St4zhWCY4tyhdl4qdtEw/BKsGpifJt8T7c2sbpivJtsfhpW9RZaomfdkX5omzXOkFrKg1BfsXq7h7aFGXbYvHTvhi3Ld6In1mIw7fFvsTOvMT+izLxM087Q/AsfhYr+j3BehiEfB6if2PkmR8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjcTwSNwaj6ILTiAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CheckmarkIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};