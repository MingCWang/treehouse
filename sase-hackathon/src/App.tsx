
import './App.css'
import { useRef, forwardRef } from 'react'
import { HiArrowSmDown } from 'react-icons/hi'
import Cards from './components/Cards'
import Header from './components/Header'
import videoFile from './assests/Swing.mp4';

function App() {


	const ref = useRef(null);

	const CardsComponent = forwardRef<HTMLDivElement>((props, ref) => {
		return (
			<div ref={ref}>
				<Cards />
			</div>
		);
	});

	function handleClick() {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center'
		});
	}


	// const titleRef = useRef<HTMLDivElement>(null);
	// return <NewComponent ref={titleRef}>Some content</NewComponent>;


	// function handleScrollToCards() {
	// 	cards.current.scrollIntoView({
	// 		behavior: 'smooth',
	// 		block: 'nearest',
	// 		inline: 'center'
	// 	});
	// }


	// const scrollToElement = (hash) => {
	// 	const element = document.querySelector(`h2[data-id='${hash}']`);

	// 	if (element) {
	// 		const { top } = element.getBoundingClientRect();
	// 		const { marginTop } = window.getComputedStyle(element);
	// 		const y = top + window.scrollY - parseInt(marginTop);
	// 		window.scrollTo({ top: y, behavior: "smooth" });
	// 	}
	// }


	return (
		<>
			<Header />
			<div className="hero">
				<div className="container">
					<h1 className="logo">UBelong</h1>
					<p>A space where you feel safe</p>
				</div>
				<button className="arrowContainer" onClick={handleClick}>
					<p>Join a safe space</p>
					<HiArrowSmDown className="arrow" />
				</button>

				<video className="hero-video" autoPlay loop muted>
					<source src={videoFile} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<CardsComponent ref={ref} />
		</>
	)
}

export default App
