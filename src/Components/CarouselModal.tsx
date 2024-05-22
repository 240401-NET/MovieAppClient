import "../Pages/LandingPage.css"
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { ITMDBMovieDto, baseimagepath } from "../services/TMDBApiService";

interface SearchedProps {
    modalOpen: boolean
    carouselResults: ITMDBMovieDto,
    setModalOpen: (open : boolean) => void
}

export const CarouselModal = React.forwardRef (({modalOpen, carouselResults, setModalOpen}:SearchedProps, ref: any) => {

    const handleClose = () => {setModalOpen(false), setShow(false)};
    const [show, setShow] = useState(modalOpen); 

    const handleAddFavorites = (e: any) => {
        e.preventDefault();
        console.log("favorited not implemented");
    }
  

    return (
        <Modal show={show} onHide={handleClose} ref={ref} className="modal-component">
        <Modal.Header closeButton>
          <Modal.Title>{carouselResults.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
                <div className='carousel-modal'>
                    <img src={`${baseimagepath + carouselResults.poster_path}`} className="carousel-modal-img" alt="" />
                    <p>Language: {carouselResults.original_language}</p>
                    <p>Genres: {carouselResults.genre_ids}</p>
                    <p>Release Date:{carouselResults.release_date}</p>
                    <p>Synopsis: {carouselResults.overview}</p>
                    <button onClick={(e) => handleAddFavorites(e)}>Favorite</button>
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