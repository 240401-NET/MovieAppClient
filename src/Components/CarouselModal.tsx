import "../Pages/LandingPage.css"
import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { ITMDBMovieDto, baseimagepath } from "../services/TMDBApiService";
import Placeholder from "../assets/placeholderimage.png";
import { AddMovieToFavorites } from "../services/UserServices";

interface SearchedProps {
    modalOpen: boolean
    carouselResults: ITMDBMovieDto,
    setModalOpen: (open : boolean) => void
}

export const CarouselModal = React.forwardRef (({modalOpen, carouselResults, setModalOpen}:SearchedProps, ref: any) => {

    const handleClose = () => {setModalOpen(false), setShow(false)};
    const [show, setShow] = useState(modalOpen); 
    const [username, setUserName] = useState("");
    const [placeholderPoster] = useState("../assets/placeholderimage.png")

    useEffect(() => {
      const user = localStorage.getItem("user");
      setUserName(user!);
    }, [])
    
    const handleAddFavorites = async (e: any, user : string, title: string, movieId: number, description: string, poster_path: string) => {
        e.preventDefault();
        console.log(poster_path === null);
        if(poster_path === null) {
          console.log("we got here");
          await AddMovieToFavorites(user, title, movieId, description, placeholderPoster);
        }
        else{
          await AddMovieToFavorites(user, title, movieId, description, poster_path);
        }
    }
  

    return (
        <Modal show={show} onHide={handleClose} ref={ref} className="modal-component">
        <Modal.Header closeButton>
          <Modal.Title>{carouselResults.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
                <div className='carousel-modal'>
                    <img src={carouselResults.posterPath !== null ? `${baseimagepath + carouselResults.posterPath}` : Placeholder} className="carousel-modal-img" alt="" />
                    <br />
                    <p>Synopsis: {carouselResults.movieDescription}</p>
                    <button onClick={(e) => handleAddFavorites(e, username, carouselResults.title, carouselResults.movieId, carouselResults.movieDescription, carouselResults.posterPath)}>Favorite</button>
                </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    )
})