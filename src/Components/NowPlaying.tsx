import "../Pages/LandingPage.css"
import Carousel  from "react-bootstrap/Carousel";
import Kingdom from "../assets/kingdom_of_the_apes_poster.jpg"

export const NowPlayingCarousel : React.FC = ({}) => {
    return (
        <>
            <Carousel fade className="now-playing-carousel-container">
                <Carousel.Item className="now-playing-carousel-items">
                    <img src={Kingdom} alt="Kingdom of the Planet of the Apes Poster"/>
                </Carousel.Item>
                <Carousel.Item className="now-playing-carousel-items">
                    <img src={Kingdom} alt="Kingdom of the Planet of the Apes Poster"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="now-playing-carousel-items">
                    <img src={Kingdom} alt="Kingdom of the Planet of the Apes Poster"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}