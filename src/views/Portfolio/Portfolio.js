import styled from 'styled-components'
import Slideshow from '../../components/Slideshow/Slideshow'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import newbalance from '../../assets/projects/newbalance.png'
import chevron from '../../assets/projects/chevron.png'
import coke from '../../assets/projects/coke.png'
import tubi from '../../assets/projects/tubi.png'
import showtime from '../../assets/projects/showtime.png'
import marriott from '../../assets/projects/marriott.png'
import arbys from '../../assets/projects/arbys.png'
import carvana from '../../assets/projects/carvana.png'
import xbox from '../../assets/projects/xbox.png'
import hbo from '../../assets/projects/hbo.png'

const StyledPortfolio = styled.div`
	height: calc(100vh - 80px);
	.portfolio-appear {
		opacity: 0;
		transform: translateY(-100px);
	}
	.portfolio-appear-active {
		opacity: 1;
		transform: translateY(0);
		transition: all 600ms;
	}
	.portfolio-enter {
		opacity: 0;
	}
	.portfolio-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.portfolio-exit {
		opacity: 1;
	}
	.portfolio-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
`
const Portfolio = () => {
	const [ inProp, setInProp ] = useState(true)
	const projectsDesktop = [
		{
			image: newbalance,
			url: 'https://cxs2549.github.io/new-balance/',
			github: 'https://github.com/cxs2549/new-balance'
		},
		{
			image: chevron,
			url: 'https://cxs2549.github.io/react-chevron/',
			github: 'https://github.com/cxs2549/react-chevron'
		},
		{
			image: coke,
			url: 'https://cxs2549.github.io/react-coke/',
			github: 'https://github.com/cxs2549/react-coke'
		},
		{
			image: tubi,
			url: 'https://cxs2549.github.io/react-tubi/',
			github: 'https://github.com/cxs2549/react-tubi'
		},
		{
			image: showtime,
			url: 'https://cxs2549.github.io/react-showtime/',
			github: 'https://github.com/cxs2549/react-showtime'
		},
		{
			image: marriott,
			url: 'https://cxs2549.github.io/react-marriott/',
			github: 'https://github.com/cxs2549/react-marriott'
		},
		{
			image: arbys,
			url: 'https://cxs2549.github.io/react-arbys/',
			github: 'https://github.com/cxs2549/react-arbys'
		},
		{
			image: carvana,
			url: 'https://cxs2549.github.io/react-carvana/',
			github: 'https://github.com/cxs2549/react-carvana'
		},
		{
			image: xbox,
			url: 'https://cxs2549.github.io/react-xbox/',
			github: 'https://github.com/cxs2549/react-xbox'
		},
		{
			image: hbo,
			url: 'https://cxs2549.github.io/react-hbo-max-v2/',
			github: 'https://github.com/cxs2549/react-hbo-max-v2'
		},
	]
	return (
		<StyledPortfolio className="mt-20 md:mt-32">
			<CSSTransition appear in={inProp} timeout={2000} classNames="portfolio">
				<Slideshow data={projectsDesktop} />
			</CSSTransition>
		</StyledPortfolio>
	)
}
export default Portfolio
