import "../Pages/LandingPage.css"
import Carousel  from "react-bootstrap/Carousel";
import Kingdom from "../assets/kingdom_of_the_apes_poster.jpg"

export const FavoritesCarousel : React.FC = ({}) => {
    return (
        <>
            <Carousel fade className="favorites-carousel-container">
                <Carousel.Item className="favorites-carousel-items">
                    <img src={Kingdom} alt="Kingdom of the Planet of the Apes Poster"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="favorites-carousel-items">
                    <img src={Kingdom} alt="Kingdom of the Planet of the Apes Poster"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="favorites-carousel-items">
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