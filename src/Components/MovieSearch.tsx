import "../Pages/LandingPage.css"
import React, {useState} from 'react';
import { SearchModal } from "./SearchModal";

const searchParameters : string [] = ["genre", "language", "movie title", "favorites"]

export interface ISearchedMovie{
    title: string,
    released_year: number,
    language: string,
    genre: string
}

const SearchedMovie : ISearchedMovie[] = [
    {
        title: "Kingdom of the Planet of the Apes",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
    {
        title: "Kingdom of the Planet of the Apes",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
    {
        title: "Kingdom of the Planet of the Apes",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
    {
        title: "Kingdom of the Planet of the Apes",
        released_year: 2024,
        language: "en-us",
        genre: "action"
    },
]

export const MovieSearch : React.FC = () => {

    const [searchedValue, setSearchedValue] = useState("");
    const [searchedParameter, setSearchedParameter] = useState("genre");
    const [modalOpen, setModalOpen] = useState(false);
    const [searchedResults, setSearchedResults] = useState<ISearchedMovie[]>([]);
  
    const handleMovieSearch = (e : React.FormEvent<HTMLFormElement>, searchedParameter : string, searchedValue : string) => {
      e.preventDefault();
      console.log(searchedParameter, searchedValue)
  
      // implement api call for search once we start connecting with backend infrastructure
    }

    return (
        <>
            <form onSubmit={(e) => {handleMovieSearch(e, searchedValue, searchedParameter), setModalOpen(true), setSearchedResults(SearchedMovie)}} className="form-container">
                <div className="form-search-component">
                    <label htmlFor="searchedValue" className="searchedValue-Label"></label>
                    <input 
                        id="searchedValue-input"
                        type="text"
                        defaultValue={searchedValue}
                        placeholder='Select an option below...'
                        onChange={(e) => setSearchedValue(e.target.value)}
                    />
                    <button className="searchedValue-button btn btn-primary w-20" type="submit">Search</button>
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
                <SearchModal modalOpen={modalOpen} searchedResults={searchedResults} setModalOpen={setModalOpen}></SearchModal>
            )}
        </>
    )
}