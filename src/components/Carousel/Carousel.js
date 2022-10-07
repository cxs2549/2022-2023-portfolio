import React, { useEffect, useState } from 'react'
import Swipe from 'react-easy-swipe'
import './index.css'
import { AiOutlineGithub } from 'react-icons/ai'
import styled from 'styled-components'

const StyledCarousel = styled.div`
	/* min-width: 690px; */
	.carousel-container {
		/* min-width: 100%; */
	}
`

function Carousel({
	data,
	time,
	width,
	height,
	captionStyle,
	slideNumberStyle,
	radius,
	slideNumber,
	style,
	captionPosition,
	dots,
	automatic,
	pauseIconColor,
	pauseIconSize,
	slideBackgroundColor,
	slideImageFit,
	thumbnails,
	thumbnailWidth
}) {
	//Initialize States
	const [ slide, setSlide ] = useState(0)
	const [ isPaused, setIsPaused ] = useState(false)
	const [ change, setChange ] = useState(0)

	//Function to change slide
	const addSlide = (n) => {
		if (slide + n >= data.length) setSlide(0)
		else if (slide + n < 0) setSlide(data.length - 1)
		else setSlide(slide + n)
	}

	//Start the automatic change of slide
	useEffect(
		() => {
			if (automatic) {
				var index = slide
				const interval = setInterval(() => {
					if (!isPaused) {
						setSlide(index)
						index++
						if (index >= data.length) index = 0
						if (index < 0) index = data.length - 1
					}
				}, time ? time : 2000)
				return () => {
					clearInterval(interval)
				}
			}
		},
		[ isPaused, change ]
	)

	function scrollTo(el) {
		const elLeft = el.offsetLeft + el.offsetWidth
		const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth

		// check if element not in view
		if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
			el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: 'smooth' })
		} else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
			el.parentNode.scroll({
				left: el.offsetLeft - el.parentNode.offsetLeft,
				behavior: 'smooth'
			})
		}
	}

	//Listens to slide state changes
	useEffect(
		() => {
			var slides = document.getElementsByClassName('carousel-item')
			var dots = document.getElementsByClassName('dot')

			var slideIndex = slide
			var i
			for (i = 0; i < data.length; i++) {
				slides[i].style.display = 'none'
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active', '')
			}
			//If thumbnails are enabled
			if (thumbnails) {
				var thumbnailsArray = document.getElementsByClassName('thumbnail')
				for (i = 0; i < thumbnailsArray.length; i++) {
					thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
						' active-thumbnail',
						''
					)
				}
				if (thumbnailsArray[slideIndex] !== undefined)
					thumbnailsArray[slideIndex].className += ' active-thumbnail'
				scrollTo(document.getElementById(`thumbnail-${slideIndex}`))
			}

			if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = 'block'
			if (dots[slideIndex] !== undefined) dots[slideIndex].className += ' active'
		},
		[ slide, isPaused ]
	)

	return (
		<StyledCarousel style={style} className="box  w-screen md:w-full">
			<div
				style={{
					maxWidth: width ? width : '600px',
					maxHeight: height ? height : '400px'
				}}
			>
				<Swipe
					onSwipeRight={() => {
						addSlide(-1)
						setChange(!change)
					}}
					onSwipeLeft={() => {
						addSlide(1)
						setChange(!change)
					}}
				>
					<div
						className="carousel-container"
						style={{
							maxWidth: width ? width : '600px',
							height: height ? height : '400px',
							backgroundColor: slideBackgroundColor
								? slideBackgroundColor
								: 'darkgrey',
							borderRadius: radius
						}}
					>
						{data.map((item, index) => {
							return (
								<div
									className="carousel-item fade"
									style={{
										maxWidth: width ? width : '600px',
										maxHeight: height ? height : '400px'
									}}
									onMouseDown={(e) => {
										automatic && setIsPaused(true)
									}}
									onMouseUp={(e) => {
										automatic && setIsPaused(false)
									}}
									onMouseLeave={(e) => {
										automatic && setIsPaused(false)
									}}
									onTouchStart={(e) => {
										automatic && setIsPaused(true)
									}}
									onTouchEnd={(e) => {
										automatic && setIsPaused(false)
									}}
									key={index}
								>
									{slideNumber && (
										<div className="slide-number" style={slideNumberStyle}>
											{index + 1} / {data.length}
										</div>
									)}
									<a href={item.url} target="_blank">
										<img
											src={item.image}
											alt={item.caption}
											className="carousel-image"
											style={{
												borderRadius: radius,
												objectFit: slideImageFit ? slideImageFit : 'cover'
											}}
										/>
										<div className="absolute right-6 -bottom-7 h-6 flex items-center justify-center hover:text-red-400">
											<a
												href={item.github}
												target="_blank"
												className="flex items-center justify-end gap-1"
											>
												<AiOutlineGithub />
												<span className="whitespace-nowrap text-xs">
													View on Github
												</span>
											</a>
										</div>
									</a>
									{isPaused && (
										<div
											className="pause-icon pause"
											style={{
												color: pauseIconColor ? pauseIconColor : 'white',
												fontSize: pauseIconSize ? pauseIconSize : '40px'
											}}
										>
											II
										</div>
									)}
									<div
										className={`carousel-caption-${captionPosition
											? captionPosition
											: 'bottom'}`}
										style={captionStyle}
									>
										{item.caption}
									</div>
								</div>
							)
						})}

						<span
							className="prev"
							href="/"
							onClick={(e) => {
								addSlide(-1)
								setChange(!change)
							}}
						>
							&#10094;
						</span>
						<span
							className="next"
							href="/"
							onClick={(e) => {
								addSlide(1)
								setChange(!change)
							}}
						>
							&#10095;
						</span>
						{dots && (
							<div className="dots">
								{data.map((item, index) => {
									return (
										<span
											className="dot"
											key={index}
											onClick={(e) => {
												setSlide(index)
												setChange(!change)
											}}
										/>
									)
								})}
							</div>
						)}
					</div>
				</Swipe>
			</div>
			{thumbnails && (
				<div className="thumbnails relative" id="thumbnail-div" style={{ maxWidth: width }}>
					{data.map((item, index) => {
						return (
							<img
								width={thumbnailWidth ? thumbnailWidth : '100px'}
								src={item.image}
								alt={item.caption}
								className="thumbnail"
								id={`thumbnail-${index}`}
								key={index}
								onClick={(e) => {
									setSlide(index)
									setChange(!change)
								}}
							/>
						)
					})}
				</div>
			)}
		</StyledCarousel>
	)
}

export default Carousel
