import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { ISearchedMovie } from "./MovieSearch";
import { CarouselModal } from "./CarouselModal";

const UpcomingMovies : ISearchedMovie[] = [
    {
        title: "Kingdom of the Planet of the Apes",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
    {
        title: "Fall Guy",
        released_year: 2024,
        language: "en-us",
        genre: "Comedy"
    },
    {
        title: "Maze Runner",
        released_year: 2024,
        language: "en-us",
        genre: "Psychological"
    },
    {
        title: "Temptation",
        released_year: 2024,
        language: "en-us",
        genre: "Drama"
    },
]

const TemplateMovie: ISearchedMovie = {
    title: "Template",
    released_year: 1900,
    language: "kor",
    genre: "genre"
}

export const UpcomingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [upcomingResults, setUpcomingResults] = useState<ISearchedMovie[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ISearchedMovie>(TemplateMovie);

    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        
        setUpcomingResults(UpcomingMovies);
    } , [upcomingResults])
    return (
        <>
            <div className="upcoming-container">
            <h1>Upcoming</h1>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="upcoming-carousel-container">
                {upcomingResults && (
                    upcomingResults.map((movie, index) => (
                        <Carousel.Item className="upcoming-carousel-items" key={index} >
                            <p onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}>{movie.title}</p>
                        </Carousel.Item>
                    ))
                )}
            </Carousel>
                {modalOpen && (
                    <CarouselModal modalOpen={modalOpen} carouselResults={currentHighlightedMovie} setModalOpen={setModalOpen}></CarouselModal>
                )}
            </div>
        </>
    )
}