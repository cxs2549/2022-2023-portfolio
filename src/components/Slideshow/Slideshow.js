import styled from 'styled-components'
import Carousel from '../Carousel/Carousel'

const StyledSlideshow = styled.div`
	display: flex;
	flex-flow: column;
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	border-radius: 13px;
	position: relative;
	z-index: 0;
	border: none;
	border-radius: 13px;
	margin-top: 2rem;
	@media (min-width: 640px) {
		margin-top: 0;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 400px auto auto;
	}
	@media (min-width: 768px) {
		gap: .5rem;
	}
	@media (min-width: 1280px) {
		border-radius: 13px;
	}

	#slides {
		margin: 0 auto;
		max-width: 100%;
	}
	.box {
		max-width: 100vw;
		.carousel-item {
			padding: 0 1rem;
			border-radius: 3px;
			background-color: transparent;

			@media (min-width: 768px) {
				padding: 0;
			}
		}
		.carousel-image {
			object-position: top;
			border-radius: 3px;
			height: 100%;
			max-width: 900px !important;
		}
		#thumbnail-div {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			row-gap: 12px;
			column-gap: 12px;
			justify-content: space-between;
			padding: 0 1rem;
			padding-top: 1rem;
			align-items: center;
			margin-top: 1rem;
			margin: 0 auto;
			width: 90%;
			img {
				border-radius: 3px;
				cursor: pointer;
				/* border: 1px solid lightgray; */
			}
			.thumbnail {
				max-width: 50px;
				@media (min-width: 640px) {
					max-width: 75px;
				}
			}
		}
		.prev,
		.next {
			font-size: 2.5rem;
			color: #333;
			@media (min-width: 640px) {
				display: block;
			}
		}
		.prev {
			left: -1rem;
			@media (min-width: 640px) {
				left: -3.5rem;
			}
		}
		.next {
			right: -1rem;
			@media (min-width: 640px) {
				right: -3.5rem;
			}
		}
	}
`

const Slideshow = ({ data }) => {
	return (
		<StyledSlideshow className="md:px-8">
			<div id="slides">
				<Carousel
					data={data}
					time={4000}
					height="350px"
					radius="10px"
					captionPosition="bottom"
					automatic={true}
					dots={false}
					pauseIconColor="blue"
					pauseIconSize="40px"
					slideBackgroundColor="transparent"
					slideImageFit="cover"
					thumbnails={true}
					thumbnailWidth="100px"
					style={{
						textAlign: 'center',
						maxHeight: '500px',
						margin: '0px auto'
					}}
				/>
			</div>
		</StyledSlideshow>
	)
}

export default Slideshow
