import styled from 'styled-components'
import Logo from './Logo/Logo'
import Title from './Title/Title'
import Links from './Links/Links'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

const links = [ '', 'portfolio', '' ]

const StyledHeader = styled.header`
	.logo-appear {
		opacity: 0;
	}
	.logo-appear-active {
		opacity: 1;
		transition: opacity 1s;
	}
	.logo-enter {}
	.logo-enter-active {}
	.logo-exit {}
	.logo-exit-active {}

	.title-appear {
		transform: translateX(100px);
	}
	.title-appear-active {
		transform: translateX(0);
		transition: transform 500ms;
	}
`
const Header = () => {
	const [inProp, setInProp] = useState(true)
	return (
		<StyledHeader className=" bg-black shadow">
			<div className="max-w-4xl py-3 mx-auto  flex items-center justify-between bg-black text-white">
				<CSSTransition in={inProp} timeout={1000} appear classNames="logo">
					<Logo />
				</CSSTransition>
				<CSSTransition in={inProp} timeout={500} appear classNames="title">
					<Title />
				</CSSTransition>
			</div>
			
		</StyledHeader>
	)
}
export default Header
