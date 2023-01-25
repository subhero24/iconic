import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVJSURBVHgB7d3bkdzGFQbgI5cDUAijCCxF4FUGzEBSBJIj0DoC0hEsM6Adwa4iWGeAUQRUBkeNwuhBVSIHjcGlgfm+qq59wXJ/DtA9APoWAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANC0zvyzlTSlvS/lQSlfKx/y011K+j5mVf/PhkuH1yt+/5i7zUelyQp9vOJldKae4UX8xXP6tuXX3kI9KObT2Xc6jK+XLmKA/+Tm0hkvqjpqPSpcT+pzze4xK5Xe+y9tuI+46H5XKh/zjgif0uTLLm1zXofJt4YvYsfIB/1x+PMaCvijGHJfDPe9rKat+7R8l31Z2WwHWuPh7FRdYV36cYmVHybeVv8UOrXXxF/8fc1AOr/5Osb5D5KNCDvf8a/l+ZKYut3GIfFva1S1Qrnsfey7f3l9dO6hkeig/tnjYO0S+re3tFuhDrHTxl/LtyGPfxPrOcZx8m/p77MTl6/TrWNZLKb+U8q60Xr+N/J1/xHpe4nj5GOPG+9i+n+BdDu/BTzGjrO+DeJ8r9pC2no8R8rYOnA9LntCsd4oVZb1T0JbLRTzFT7GwrBQry0pBW3IY0jzFY6wgK8XKslLcmT28BXqIeu/LQ9hjwBVHrQD/DhhhDxWg9jVe3/qfA0bYQwWofYPzv4CR9lABTlHnHDDS4b4Byu1P0yMQcxib06zW881tl8OhG3OOOk85TEY/xTrOUWftfHxOVoqV5fROut7T0i1u6/m4IivFysqf/Clv1+VCrW7r+bgiK8XKcnpP9ac85Yytbuv5uCIrxQZymSVZupyp1W09H5+RlWIDOaxEt5Qub5xa2Ho+PiMrxUZymG+wpJuGdbeebyvNzwnuP9ma47dchqNE7ecrLzlr7VzKN1NnW7Webwv6AebVz4M9x3JOcdsE99bzrU4FmNGl5fumlP/Gcr4uLfnbmKD1fPyFrBSNyOWWHv/DQ9yg9XxcZKVoSA6rVi91od18q9F6PuI4U/pyeBX5Puc121uX1vPdrawUjct5W93ZJ/23nu/uZKXYkby91V3yYbb5fHchK8UO5fRWt4sVtJ7v0LJS7FhOGLIQK2o93xR6ghvT+v/3aOdDRxh3TQXgrqkA3LU9VICqkYVpggYVDlcBYvlNNDiQPVSA2nV+HgJG2kMF+DXqfJfGoDDSHirAS9TpL/6ngBH2UgFqnwP6LZUMxOKq5ivAZRbTlPU+3+awozzsW962rMfTXl6N5jDorNmxNq3nO7S8fXz6Uw67TTb5mjSHFdyess7HWEnr+Q4vb9sqdazXnLjIUw4XyM+5zCpsnzJ62mHr+RhhxZPXZcVtUw63Bl2u790R8m1pb2OBfoj6N0JTnEp5zvH9Cc9Rv5PNHMbOuGo932Z2VQEum9+ttQPkqZSrr1JzuGU6xfrO5fN4uXZQ6/m2trvRoOVD7b9W16oE/xxxzI+xjbGfQev5NrXb2VM57AS/+Hv+azOa+hvdWF/fun415sDW821tt/MBLjvB3+OG2P0z0LfRrtbz/cmuJ8RcKsG/YrkH4zE90C+xrh8qNwJ/iXXV5tvU7meEXZ4J+gVfl9ge9T8jjvkl1tFX8v7iqn2z0no+5pLzrnM5ak2bHDqYulxW30F3iglaz8cCcug1vmV70C7b6Ajrcobth1rPx0JyaP36ytBvD/ScQ0v18TMntD/mMSdOqMnhG+g1p/t4+f0+70PMrPV8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADANL8DR975q6DEDv4AAAAASUVORK5CYII=)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function CssIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};