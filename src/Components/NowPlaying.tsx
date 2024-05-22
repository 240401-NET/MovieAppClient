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
        genre: "action",
        img: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
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

const addedMovie : ISearchedMovie = {
    title: "Test",
    released_year: 2024,
    language: "en-us",
    genre: "Drama"
}

export const NowPlayingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [nowPlayingResults, setNowPlayingResults] = useState<ISearchedMovie[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ISearchedMovie>(TemplateMovie);
    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        setNowPlayingResults(NowPlayingMovies);
    } , [])

    // change to make subsequent api calls to get more pages of now playing movies 
    const handleShowMoreMovies = (e: any, newMovie : ISearchedMovie) => {
        e.preventDefault();
        const updatedMovies = [...nowPlayingResults, newMovie]
        setNowPlayingResults(updatedMovies)
        console.log(nowPlayingResults, updatedMovies);
    }

    return (    
        <>
        <div className="now-playing-container">
            <h5>Now Playing</h5>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="now-playing-carousel-container">
                {nowPlayingResults && (
                    nowPlayingResults.map((movie, index) => (
                        <Carousel.Item className="now-playing-carousel-items" key={index} >
                            <p>{movie.title}</p>
                            <img src={movie.img} alt="" onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}/>
                            <Carousel.Caption>{movie.title}</Carousel.Caption>
                        </Carousel.Item>
                    ))
                )}
                {modalOpen && (
                    <CarouselModal modalOpen={modalOpen} carouselResults={currentHighlightedMovie} setModalOpen={setModalOpen}></CarouselModal>
                )}
                <Carousel.Item>
                    <button onClick={(e) => {handleShowMoreMovies(e, addedMovie)}}>Show more ...</button>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}