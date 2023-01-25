import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkjSURBVHgB7d2PcdvIFcfx50wK8HUAd+CrIEoFsSuwroLTVSCmgrMroK4CpwPaFcipAOjA6eAXLAFaFC2S2D8ksLvfzwxGcyeLJMD3sNjFw64ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIpJe99t9v2305LHfbq1CHI+K9F9q02+tjnO/a6wSHI/KnPmyq/rSJwT//vF4bchb/yXearq25CTwCP6dlSFvGq5rfbQlJkFA8DsbQ94Upi0pCQKDf8uQN4VrS0iCmOAnAQqg58N8VSVBbPD3Hq1wf7PyfbVwTb9tckyC8TO7a/jGwn0y5E3DDZ9WcdqckkDxZ/7tPhvKkCoglEES1LSv8FBDYNSwj4hQcoCUvG9IqMRAKXGfcEElBUxJ+4IrKiFwStiHub2yiinNWHnOun7756tXrzqrVNUJ4FScBJ1VHvxO9QngVJgEnRH8WyTAqKIk6Izg/4EE2FNBEnRG8D9DAhwoOAk6I/h/UkM1qJcxQGIqSJfqPwT/z0iAA30LcN//+GDluRv3DXiZhnlySkcS4GeqI/h37gxbdIJtG/zukufB6nLb9wn+sspxJ1h62/8o/tnXI9yo0BdDnVzw99t3hfs+JhCfH3lRmkrK2YOn/ww3itOKUui6KE3w39pCyG/6R5EEFVOa4F/ZwvSf6U5xWpEE89EV5qtXmilSVrZQ7rMpjjveSWaEFusPTKdp89W/s0j9a3xTnJUtnBaQBBr6Je2J93C/awwDTT8rr0MP3Pi3MT5aJtxnVZy1BdBw1n+Y+B6tWH8gqAPXyrMZ7f/9n4rzYJnR9EA85k/P9/td/kOyK6ud/Ofv33F/10x4/XvF+WYZ0nA2Dj22O2frhjRcvm4UhvUHFO/+xGvfK06rjJtpXTAJ9NTJjWK1UxqtDjrJShP8jWVOaYZ97w5e81wndzKrneLm7z+01vCFf1CcVqwQc+iD/Dq5U9Rag/VE8cN2h1rFacUaYcfE1B295NZmNns1qIZrbHcmaGx+/7OhQjLLju85GmqXXMdzCf2arj/Ob2xmsz8S2R+EbdDZ8ND23IoNfmfct/c2v86G7xz7lP5yKKvm+FoUXzwXw33H3AA7RsO1auzQnfeXYpVRfPGcr40of5hOw1mq1eWtrFK6TovrOs48gxxCQ2uQctjt0Moqp8smwVpc7sTrD+I7pW8NsiluuzTFF88davvtxpCW0p2tHiwzGm5CucvCtYY+0v6Y/Pfx/63Hf+N91lW6lpZO7iUpvpOc1TDnuL/uDO17E2otj06n4uuGNqKTez0K7yRncXYaAzK2jNuZXNY8vqcvOrlz0XB29GIZUJqyhX2tJp6d5S/ry53sJ8aSZ1D3d0MXvc8ayhU+W/rSkK7f3p+7013a8TyHBFgQXX5tgs7OrBFAAmSmsARo7fJFgV2//TrWYL30GapKANYHWAgNndXGLq/pN6ZIH9ECLMB46dPadb156VKIFgBzWNn1MXRptACzG4cRv9v1uT7Am8O+AC0Ari16xrtAr2d878UgAeZ3Y/46G56o+mU8A7+3sCfq/mHImzzZwsi//qbVC3dfFTbx7+MLr+PFMkcLML/G/Pzx0hj++P9+Mz+NVY5O8MxSfn4FdKgPXy/34+mLFiAzOlF8duzuLo4jAebnG7RH1yWT/xoK1ScMCTC/zvysj3WC+x9eU5rbMuZimhUJML//mp+m3x53Z/tx9OfGwmbXK3YSsKn+bpjbl3774Pcn20D/nGAU8qtVjlGgmY2XLq4Qbo4nq36hFAKzGgPwL7u+B0aNaAEWQZRDz4YWYAHGQPxk1/Pp1YnHImtCC7AQut46CSfn5acFwCyutE5CZ8zL/wwJsCDjZUloafM5nQ3TonSGH7JOABU4B+U4b0/qlqCzC61+I6ZDnIfCViZXTkmjNLM2f5y6zwqbGrFVRavrzE5xK5M7j8orCULWSHAnBhf4jed7fVO4R9EaXI4SrUw+Wltm9DQ9+oMuMz36Wmkw51BqSrgy+R7fysliKc0s1Pta+Zdm45DSr0x+qPqzldK1qi9Zi8uiMArv5PqqNgl02eDfaUUneTrFd3JDVDdLmq4T/PvoJJ+itJ3cEL41+dly+6r5LKrFXUQdhy4/L/5U7mbRFyuYhgU4Hm1enZ1Zp+BalpIA15gXf4ptPc4l7pguwRj87kSzhPsgnZ1Yp+BaZi+F0NBBaiydmAPqAuOzCrxWHffJLb0UE/ydpdPYAmaoXkIt0O+WzkO/uVJf3xnS9jX9tikpCRJdYrpj6mqUUj69xtykSqPVwcrk/X/fKU6rApJAaVacXB285jslujFptVO8lY7c+lf8yvJZ1Q0dUtiEuYdWJ14/9viSAAof899owhlaFSeB4orbnNWE92gUvsL83KNR85N/gHqvTK74suIci+fWivPR8/1u5d/a3Frt5NdMrxV4NlZ8TVE2xXOKL257sADyK92+9iwYy6XzHTX3uxuLoCHRQpvqncXXDSn+bnr0PRCd7yS73zWG5zQ0o/tButGJTm7A6xedBIoP/lYJ+zu68PeJAEozLLi44jmlCf7GUD6lSYLFFM8pvritFcFfF6VJghubWf8Z3ipOK4K/TmPwxDx04/72rc0k98+/BNlPjRhLw1l8Y3X6tdTK16mqnxlurP+PKZ7L1W+1B7/D1Ii2TYKH/scfVo9/j/sMPFGC4q4MrAw4RmUnwcrwTPWd4JdoKARL+aDOErglkWrs65xEH+CAhjHxf1l5bsR4/09oAfZoObNTXEpnC5mNYSlIgFEFwb/TGUnwAwlgVQX/TmckwRZ3gusL/p3OSIK6E6Di4N/pjCSok9JUg7ZzjqyUsA+YQUmBU9K+4ApKDJgS9wkXUHKglLxvSKCGAKlhHxGgpsCoaV8xkSoLCKVLAqYvyZ2GuWliA6GxzOgCs0IjQ4qbCKtVxpcCCZKg1mely6Fwbc7BvxObBIa8KUxbQvDvxCSBIW/yX3+gLSn4dwKToPj5+2t4Iuyrx7/trNDisHGf3BpfnceffTLkTdPXH2hLPPMf8mgJmL+/FBO+9CqCf4fjUSkxX/0zHA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAN/wdU2RlkaL885gAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function BacteriaIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};