import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { ISearchedMovie } from "./MovieSearch";
import { CarouselModal } from "./CarouselModal";

const NowPlayingMovies : ISearchedMovie[] = [
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


export const NowPlayingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [nowPlayingResults, setNowPlayingResults] = useState<ISearchedMovie[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ISearchedMovie>(TemplateMovie);
    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        setNowPlayingResults(NowPlayingMovies);
    } , [nowPlayingResults])

    return (
        <>
        <div className="now-playing-container">
            <h1>Now Playing</h1>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="now-playing-carousel-container">
                {nowPlayingResults && (
                    nowPlayingResults.map((movie, index) => (
                        <Carousel.Item className="now-playing-carousel-items" key={index} >
                            <p onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}>{movie.title}</p>
                        </Carousel.Item>
                    ))
                )}
                {modalOpen && (
                    <CarouselModal modalOpen={modalOpen} carouselResults={currentHighlightedMovie} setModalOpen={setModalOpen}></CarouselModal>
                )}
            </Carousel>
            </div>
        </>
    )
}