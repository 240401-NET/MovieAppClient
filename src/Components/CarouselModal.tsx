import React, {useState} from 'react';
import { ISearchedMovie } from './MovieSearch';
import Button from 'react-bootstrap/Button';
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
        <Modal show={show} onHide={handleClose} ref={ref}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {carouselResults && (
                <div>
                    <li key={carouselResults.title}>
                        <p>{carouselResults.title}</p>
                        <p>{carouselResults.language}</p>
                        <p>{carouselResults.genre}</p>
                        <p>{carouselResults.released_year}</p>
                    </li>
                    <button onClick={(e) => handleAddFavorites(e)}>Favorite</button>
                </div>
                )
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
})