import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgB7d3hcdRWFAXg61RACUsJVBDTyaYC6ABTQUgFoROgAtPBugPSwY1kLQnMALbeSrKk+30z+gXM4JXuSkd6Oo4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYSGY+67Y33fYh/3fbbccoyOdRSLdTD912yp/r/+wQRfg8inlgZ3+7059FAT6PQrqdeMzHu4mdy+Gyx+dRRQ7XtY/1JXd86s/h0meMD8G25Xi73endz/Y+Rwq2Ldtcx87kuEtBA7AX+f1tvsc65Y4CYA63PE853m3s3G+xf59ivEO3vY79eBXDzzTWX8G2XfDt1zvExuX44PvVKdiHbmdeZ5vNB+JsuwTsHYP9qHggZGPw7fwd7EsOlwJfcrz+32wuEOfDyx1+9fMeoogKIfje1dXVXbSFuv7gfxPb0xx8z58Ve5Ttgfg6NiIFX34mCwTiLDDkXCAblgScrf7ZQAq+PCSHZwO7C8TZHnxPaf1/Ld0Of51t/oyVyh2f2ZhBtj8buI6VScGXsXJHgTgLL/fgAt0B8C7brOayofu/vMo2gm91ufFAnIIvl8r2QPzk36DZHnyPAV/lBgNxtmcYwZfvbfFgSsGXKWV7IL6JheW4epNvvQv4kbwsEB9iIdm+tPuUvv35lWxfS7PYs4EUfJlTrjgQ5wYGlI3LC5YV5MzPBlLwZQndAXOTbW5iJtkefG8Cxsj2OpVZAnGu+KzETuWKFsul4MtTyBUE4vSWF08lL7vnfvGlRxZvtptbmVqUVhfUqRximn7R1nqTt+pNmMRTfQunt7xYi3yCQJx6PVmTJQ/IFHxZm1yoXzT1ei5GCB5hwX5RvZ6sV85YPZiCL2uXMwbi1OvJFuQMLWwp+LIVOXGdSqo3YWtywn7R1OvJFuUEi+VS8GWrcoJAnBa7sWV5Qb9o6vVk6/KyQHzK8U7p2581yfZA3OIYsDbZHojHEHwnZC3QtN7G/F4GrFW2B+LH0OvJumV7IH7IKQVftiDb1/T8yjFgK3LaQKzXcyZXwSxyuFyZ6o7Ncy+6zMNdoJmcD9gp7gqpN2Gb8rI6lUy9nmxdti+W6x0Dti7bArHFbuxDtq33PwSzcxdoIf0RPebvd8HXvlmAu0CUZgAozQBQmgGgNANAaQaA0gwApbnXfJbDmpu+lvz6vO3R5xgq1N8H9wxA/Ld0uV9zf4ga7rrtpVWmBuBeDk0Lh6jlrttedEPwTxRWPgOcV1weop5DTPNrXDdNCB6u+6v6PYorfwk0dpHa3lRfdOcMQGkGIOJj1PU5ijMAEZ+irpZf+borMsDwAOw2Ct4G7S7/n0dx5c8A5/vgfeHsXdRxF0p277kEiqHD5/xt+Efs+7r4YwxdRS88BR54ErwQ7wSvkzMApRkASjMAlGYAKM0AUJoBoDQDQGkGgNIMAKUZAEozAJRmvcmZXqCaDEDoBarMAIReoChML5BeoNKEYL1ApXknWC+QXiCoygDoBSrNAOgFKk0G0AtUml4gvUCluQQKvUCVeRK8EL1A6+QMQGkGgNIMAKUZAEozAJRmACjNAFCaAaA0A0BpBoDSDAClGQBKMwCUZgAozQAs5+OIv1v+Xd2lGIDljHn3uPy7uuxM/+5xX8GYDzsF7FFfwvvAEJzORb2wX30fabfdfnPgf+i2m3NDBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwK78C1anE27fHz4PAAAAAElFTkSuQmCC)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function YenIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};