import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { ITMDBMovieDto, baseimagepath } from '../services/TMDBApiService';
import "../Pages/LandingPage.css"
import Placeholder from "../assets/placeholderimage.png"
import { DeleteMovieFromFavorites } from '../services/UserServices';

interface SearchedProps {
    modalOpen: boolean
    currentlyLookingAtFavorites: boolean
    searchedResults: ITMDBMovieDto[],
    setModalOpen: (open : boolean) => void
    setCurrentlyLookingAtFavorites:(yes: boolean) => void
}

export const SearchModal : React.FC<SearchedProps> = ({modalOpen, searchedResults, setModalOpen, currentlyLookingAtFavorites, setCurrentlyLookingAtFavorites}) => {

    const handleClose = () => {setModalOpen(false), setShow(false), setCurrentlyLookingAtFavorites(false)};
    const [show, setShow] = useState(modalOpen);    
    const [searchedResult, setSearchedResult] = useState<ITMDBMovieDto[]>([]);
    const [username, setUserName] = useState("");

    useEffect(() => {
      const user = localStorage.getItem("user");
      setUserName(user!);
    }, [])
    

    useEffect(() => {
      if (JSON.stringify(searchedResults) !== JSON.stringify(searchedResult)) {
        handleSetSearchResults(searchedResults);
      }
    }, [searchedResult])

    const handleSetSearchResults = (result_set :ITMDBMovieDto[]) => {
      setSearchedResult(result_set);
    }

    const handleDeleteFavorites = async (e: any, user : string, title: string, movieId: number, description: string, poster_path: string) => {
      e.preventDefault();
      poster_path !== null ? poster_path = poster_path : poster_path = "../assets/placeholderimage.jpg";
      await DeleteMovieFromFavorites(user, title, movieId, description, poster_path);
      handleClose();
  }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {searchedResult!.map((movie, index) => {
                return (
                    <div key={index} className='carousel-modal'>
                      <img src={movie.posterPath !== null ? `${baseimagepath + movie.posterPath}` : Placeholder} alt="" className="carousel-modal-img"/>
                        <br />
                        <p>{movie.title}</p>
                        <p>{movie.movieDescription}</p>
                        {currentlyLookingAtFavorites && (
                          <button onClick={(e) => handleDeleteFavorites(e, username, movie.title, movie.movieId, movie.movieDescription, movie.posterPath)}>Delete</button>
                        )}
                        <br />
                    </div>
                )
            })}
        </Modal.Body>
      </Modal>
    )
}