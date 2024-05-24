import "../Pages/LandingPage.css";
import {useEffect, useState} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import { CarouselModal } from "./CarouselModal";
import { FetchUpcomingMovies, ITMDBMovieDto, TemplateMovie, baseimagepath } from "../services/TMDBApiService";
import Placeholder from "../assets/placeholderimage.png"

export const UpcomingCarousel : React.FC = ({}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [upcomingResults, setUpcomingResults] = useState<ITMDBMovieDto[]>([]);
    const [currentHighlightedMovie, setCurrentHighlightedMovie] = useState<ITMDBMovieDto>(TemplateMovie);
    const [currentReponsePage, setCurrentResponsePage] = useState<number>(1);
    const [currentPageResponse, setCurrenPageResponse] = useState<ITMDBMovieDto[]>([])
    const [firstLoad, setFirstLoad] = useState(true);
    // implement call to backend that gets a list of all now playing movies and store it into a state variable.

    useEffect (()=> {
        if(firstLoad) {
            GetUpcoming(currentReponsePage)
        }
        setFirstLoad(false);
        if(JSON.stringify(currentPageResponse) !== JSON.stringify(upcomingResults))
            {
            setUpcomingResults(prevItems => {
            const updatedMovies = [...prevItems, ...currentPageResponse];
            return updatedMovies;
            })
        }
    }, [currentPageResponse])

    const ShowMoreMovies = () => {
        GetUpcoming(currentReponsePage);
    }

    const GetUpcoming = async (page : number) => {
        const responseData = await FetchUpcomingMovies(page);
        setCurrenPageResponse(responseData);
        setCurrentResponsePage(() => currentReponsePage + 1)
    }

    return (
        <>
            <div className="upcoming-container">
            <h4>Upcoming</h4>
            {/* map over each movie result and display them on carousel*/ }
            <Carousel fade className="upcoming-carousel-container">
                {upcomingResults && (
                    upcomingResults!.map((movie, index) => (
                        <Carousel.Item className="upcoming-carousel-items" key={index} >
                            <p>{movie.title}</p>
                            <img src={movie.posterPath !== null ? `${baseimagepath + movie.posterPath}` : Placeholder} alt="" onClick={() => {setModalOpen(true), setCurrentHighlightedMovie(movie)}}/>
                            {/* <Carousel.Caption>{movie.title}</Carousel.Caption> */}
                        </Carousel.Item>
                    ))
                )}
                {modalOpen && (
                    <CarouselModal modalOpen={modalOpen} carouselResults={currentHighlightedMovie} setModalOpen={setModalOpen}></CarouselModal>
                )}
                <Carousel.Item>
                <button onClick={() => ShowMoreMovies()}>Show more ...</button>
                </Carousel.Item>
            </Carousel>

            </div>
        </>
    )
}