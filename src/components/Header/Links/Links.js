import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const StyledLinks = styled.nav`
	background-color: #fff;
	a {
		position: relative;
		transition: transform 400ms;
		/* transition-delay:  100ms; */
		width: min-content;
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: -.5rem;
			opacity: 0;
			@media (min-width: 768px) {
				right: -.75rem;
			}
			@media (min-width: 1280px) {
				right: -1.25rem;
			}
		}
	}
	.active {
		transform: translateY(54px);
		font-size: 24px;
		position: absolute;
		font-weight: 700;
		opacity: 1;
		background-color: transparent;
		&::after {
			opacity: 1;
		}
		@media (min-width: 768px) {
			font-size: 58px;
			transform: translateY(65px);
		}
		@media (min-width: 1280px) {
			font-size: 80px;
		}
	}
`
const Links = ({ links }) => {
	return (
		<div className="max-w-4xl mx-auto  w-full">
			<StyledLinks className="grid grid-cols-3 items-center justify-center w-full gap-8 max-w-4xl px-4 md:rounded-t mx-auto h-10">
				{links.map((link, i) => (
					<div key={i} className="flex items-center justify-center">
						<NavLink to={i == 1 ? '/' : link} className="opacity-75">
							{link}
						</NavLink>
					</div>
				))}
			</StyledLinks>
		</div>
	)
}
export default Links
