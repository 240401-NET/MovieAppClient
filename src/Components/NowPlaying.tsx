import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { ISearchedMovie } from "./MovieSearch";
import { SearchModal } from "./SearchModal";

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
        genre: "action"
    },
    {
        title: "Maze Runner",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
    {
        title: "Temptation",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
]


export const NowPlayingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [nowPlayingResults, setNowPlayingResults] = useState<ISearchedMovie[]>([]);

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
                            <p onClick={() => setModalOpen(true)}>{movie.title}</p>
                        </Carousel.Item>
                    ))
                )}
            </Carousel>
            {modalOpen && (
                <SearchModal modalOpen={modalOpen} searchedResults={nowPlayingResults} setModalOpen={setModalOpen}></SearchModal>
            )}
            </div>
        </>
    )
}