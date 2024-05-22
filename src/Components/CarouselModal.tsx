import "../Pages/LandingPage.css"
import React, {useState} from 'react';
import { ISearchedMovie } from './MovieSearch';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface SearchedProps {
    modalOpen: boolean
    carouselResults: ISearchedMovie,
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
                    <img src={carouselResults.img} className="carousel-modal-img" alt="" />
                    <p>Language: {carouselResults.language}</p>
                    <p>Genres: {carouselResults.genre}</p>
                    <p>Release Date:{carouselResults.released_year}</p>
                    <p>Synopsis: {carouselResults.description}</p>
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