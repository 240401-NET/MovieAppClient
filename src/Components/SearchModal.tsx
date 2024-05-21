import React, {useState} from 'react';
import { ISearchedMovie } from './MovieSearch';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface SearchedProps {
    modalOpen: boolean
    searchedResults: ISearchedMovie[],
    setModalOpen: (open : boolean) => void
}

export const SearchModal : React.FC<SearchedProps> = ({modalOpen, searchedResults, setModalOpen}) => {

    const handleClose = () => {setModalOpen(false), setShow(false)};
    const [show, setShow] = useState(modalOpen);
    // const [renderedResults, setRenderedResults] = useState<ISearchedMovie[] | undefined>(undefined)

    // useEffect(() => {
    //     setRenderedResults(searchedResults)
    // })
    

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {searchedResults.map((movie, index) => {
                return (
                    <li key={index}>
                        <p>{movie.title}</p>
                        <p>{movie.language}</p>
                        <p>{movie.genre}</p>
                        <p>{movie.released_year}</p>
                    </li>
                )
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}