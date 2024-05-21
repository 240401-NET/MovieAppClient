import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { ISearchedMovie } from "./MovieSearch";
import { SearchModal } from "./SearchModal";

const FavoritedMovies : ISearchedMovie[] = [
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


export const FavoritesCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [favoritesResults, setFavoritesResults] = useState<ISearchedMovie[]>([]);

    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        
        setFavoritesResults(FavoritedMovies);
    } , [favoritesResults])

    return (
        <>
            <h1>Favorites</h1>
            <div className="favorites-container">
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="favorites-carousel-container">
                {favoritesResults && (
                    favoritesResults.map((movie, index) => (
                        <Carousel.Item className="favorites-carousel-items" key={index} >
                            <p onClick={() => setModalOpen(true)}>{movie.title}</p>
                        </Carousel.Item>
                    ))
                )}
            </Carousel>
            {modalOpen && (
                <SearchModal modalOpen={modalOpen} searchedResults={favoritesResults} setModalOpen={setModalOpen}></SearchModal>
            )}
            </div>
        </>
    )
}