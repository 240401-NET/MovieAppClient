import "../Pages/LandingPage.css";
import {useState, useEffect} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { CarouselModal } from "./CarouselModal";
import { FetchUpcomingMovies, ITMDBMovieDto, TemplateMovie, baseimagepath } from "../services/TMDBApiService";

export const UpcomingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [upcomingResults, setUpcomingResults] = useState<ITMDBMovieDto[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ITMDBMovieDto>(TemplateMovie);
    const [currentReponsePage, setCurrentResponsePage] = useState<number>(1);
    const [currentPageResponse, setCurrenPageResponse] = useState<ITMDBMovieDto[]>([])
    // implement call to backend that gets a list of all now playing movies and store it into a state variable.
    useEffect(() => {
        try{
            GetUpcoming(currentReponsePage);
            setUpcomingResults(currentPageResponse);
        }
        catch (error){
            console.log(error)
        }
    } , [])

    const GetUpcoming = async (page : number) => {
        const responseData = await FetchUpcomingMovies(page);
        setCurrenPageResponse(responseData);
    }

    const handleShowMoreMovies = async (e: any, newMovies : ITMDBMovieDto[], page: number) => {
        e.preventDefault();
        GetUpcoming(page)
        setUpcomingResults(prevItems => {
            const updatedMovies = [...prevItems, ...newMovies];
            return updatedMovies;
        });
    }
    
    return (
        <>
            <div className="upcoming-container">
            <h4>Upcoming</h4>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="upcoming-carousel-container">
                {upcomingResults && (
                    upcomingResults.map((movie, index) => (
                        <Carousel.Item className="upcoming-carousel-items" key={index} >
                            <p>{movie.title}</p>
                            <img src={`${baseimagepath + movie.poster_path}`} alt="" onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}/>
                            <Carousel.Caption>{movie.title}</Carousel.Caption>
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