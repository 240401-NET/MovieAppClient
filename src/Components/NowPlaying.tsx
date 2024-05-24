import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { CarouselModal } from "./CarouselModal";
import { FetchNowPlayingMovies, ITMDBMovieDto, TemplateMovie, baseimagepath } from "../services/TMDBApiService";
import Placeholder from "../assets/placeholderimage.png"


export const NowPlayingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [nowPlayingResults, setNowPlayingResults] = useState<ITMDBMovieDto[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ITMDBMovieDto>(TemplateMovie);
    // keeps track of the current response page--sends api call to get next page of results
    const [currentReponsePage, setCurrentResponsePage] = useState<number>(1);
    const [currentPageResponse, setCurrenPageResponse] = useState<ITMDBMovieDto[]>([])
    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        try{
            GetNowPlaying(currentReponsePage);
            setNowPlayingResults(currentPageResponse);
        }
        catch (error){
            console.log(error)
        }
    } , [])

    const GetNowPlaying = async (page : number) => {
        const responseData = await FetchNowPlayingMovies(page);
        setCurrenPageResponse(responseData);
    }

    // change to make subsequent api calls to get more pages of now playing movies 
    const handleShowMoreMovies = async (e: any, newMovies : ITMDBMovieDto[], page: number) => {
        e.preventDefault();
        GetNowPlaying(page)
        setNowPlayingResults(prevItems => {
            const updatedMovies = [...prevItems, ...newMovies];
            return updatedMovies;
        });
    }

    return (    
        <>
        <div className="now-playing-container">
            <h4>Now Playing</h4>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="now-playing-carousel-container">
                {nowPlayingResults && (
                    nowPlayingResults.map((movie, index) => (
                        <Carousel.Item className="now-playing-carousel-items" key={index} >
                            <p>{movie.title}</p>
                            <img src={movie.poster_path !== null ? `${baseimagepath + movie.poster_path}` : Placeholder} alt="" onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}/>
                            {/* <Carousel.Caption>{movie.title}</Carousel.Caption> */}
                        </Carousel.Item>
                    ))
                )}
                {modalOpen && (
                    <CarouselModal modalOpen={modalOpen} carouselResults={currentHighlightedMovie} setModalOpen={setModalOpen}></CarouselModal>
                )}
                <Carousel.Item>
                    <button onClick={(e) => {{setCurrentResponsePage(currentReponsePage + 1), handleShowMoreMovies(e, currentPageResponse, currentReponsePage)}}}>Show more ...</button>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}