import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

import styled from 'styled-components'
import Slideshow from '../../components/Slideshow2/Slideshow'

const StyledPortfolio = styled.div`
	z-index: 10;
	position: relative;
	margin-top: 70px;
	@media (min-width: 768px) {
		margin-top: 120px;
	}
	/* face classes */
	.face-appear {
		opacity: 0;
		transform: translateY(-20px);
	}
	.face-appear-active {
		opacity: 1;
		transform: translateY(0);
		transition: all 600ms;
	}
	.face-enter {
		opacity: 0;
	}
	.face-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.face-exit {
		opacity: 1;
	}
	.face-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
	/* slide classes */
	.slide-appear {
		opacity: 0;
		transform: translateY(-100px);
	}
	.slide-appear-active {
		opacity: 1;
		transform: translateY(0);
		transition: all 600ms;
	}
	.slide-enter {
		opacity: 0;
	}
	.slide-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.slide-exit {
		opacity: 1;
	}
	.slide-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
`
const Portfolio = () => {
	const [ inProp, setInProp ] = useState(true)

	return (
		<StyledPortfolio>
			<CSSTransition in={inProp} timeout={2000} appear classNames="slide">
				<Slideshow />
			</CSSTransition>
		</StyledPortfolio>
	)
}
export default Portfolio
