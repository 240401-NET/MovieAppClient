import "../Pages/LandingPage.css"
import React, {useEffect, useState} from 'react';
import { SearchModal } from "./SearchModal";
import { ITMDBMovieDto, SearchMovieByGenre, SearchMovieByLanguage} from "../services/TMDBApiService";
import { SearchMovieByFavorites } from "../services/UserServices";

const searchParameters : string [] = ["genre", "language", "movie title"]

export const MovieSearch : React.FC = () => {

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedParameter, setSearchedParameter] = useState<string>("genre");
    const [modalOpen, setModalOpen] = useState(false);
    const [searchedResults, setSearchedResults] = useState<ITMDBMovieDto[]>([]);
    const [currentReponsePage, setCurrentResponsePage] = useState<number>(1);
    const [currentlyLookingAtFavorites, setCurrentlyLookingAtFavorites] = useState<boolean>(false)
    
    const [username, setUserName] = useState("");

    useEffect(() => {
      const user = localStorage.getItem("user");
      setUserName(user!);
    }, [])
  
    const handleMovieSearch = async (e : React.FormEvent<HTMLFormElement>,  searchedValue: string, searchedParameter : string) => {
      e.preventDefault();
  
      if (searchedParameter == "genre") {
        e.preventDefault();
        var results = await SearchMovieByGenre(currentReponsePage, searchedValue);
        handleSetSearchResults(results);  
      }

      if (searchedParameter == "language") {
        e.preventDefault();
        var results = await SearchMovieByLanguage(currentReponsePage, searchedValue);
        handleSetSearchResults(results);  
      }

      if (searchedParameter == "movie title") {
        e.preventDefault();
        window.alert("not implemented")
      }
    }

    const ShowFavorites = async(e : any) => {
        e.preventDefault();
        var results = await SearchMovieByFavorites(username);
        setCurrentlyLookingAtFavorites(true)
        handleSetSearchResults(results); 
    }

    const handleSetSearchResults = (result_set :ITMDBMovieDto[]) => {
        setSearchedResults(result_set);
        setModalOpen(true);
    }
    
    return (
        <>
            <form onSubmit={(e) => handleMovieSearch(e, searchedValue, searchedParameter)} className="form-container">
                <div className="form-search-component">
                    <label htmlFor="searchedValue" className="searchedValue-Label"></label>
                    <input 
                        id="searchedValue"
                        type="text"
                        defaultValue={searchedValue}
                        placeholder='Select an option below...'
                        onChange={(e) => setSearchedValue(e.target.value)}
                    />
                    <button className="searchedValue-button btn btn-primary w-20" type="submit">Search</button>
                    <button className="searchedValue-button btn btn-primary w-20" onClick={(e) => ShowFavorites(e)}>Favorites</button>
                </div>
                <div className="form-parameters-component">
                    {searchParameters.map((parameter, index) => (
                        <label key={index} htmlFor={`parameter-${index}`} className='parameter-label'>
                        <input 
                            type="radio" 
                            id={`parameter-${index}`}
                            name='parameter'
                            value={parameter}
                            checked={searchedParameter === parameter}
                            onChange={(e) => setSearchedParameter(e.target.value)}
                            className='parameter-radio'
                        />
                        {parameter}
                        </label>
                    ))}
                </div>
            </form>
            {modalOpen && (
                <SearchModal modalOpen={modalOpen} searchedResults={searchedResults} setModalOpen={setModalOpen} setCurrentlyLookingAtFavorites={setCurrentlyLookingAtFavorites} currentlyLookingAtFavorites={currentlyLookingAtFavorites}></SearchModal>
            )}
        </>
    )
}