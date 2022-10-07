import styled from 'styled-components'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
const StyledTitle = styled.div``
const Title = () => {
	return (
		<StyledTitle className="flex gap-2 items-center pr-4">
			<div className="flex items-center gap-2">
				<div className="leading-4 font-medium text-lg">
					<h2 className="text-xl">Cliff Sanchez</h2>
					<p className="text-right">React web dev</p>
				</div>
				<div className="mt-1">
					<a href="https://www.linkedin.com/in/cliff-sanchez-b75a201bb/" target="_blank">
						<AiOutlineLinkedin size={24} />
					</a>
					<a href="https://github.com/cxs2549" target="_blank">
						<AiOutlineGithub size={22} />
					</a>
				</div>
			</div>
		</StyledTitle>
	)
}
export default Title
