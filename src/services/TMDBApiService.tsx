const baseUrl = "http://localhost:5013";

export const baseimagepath = "https://image.tmdb.org/t/p/w500";

export interface ITMDBMovieDto {
    "id": number,
    "title": string,
    "release_date": string,
    "genre_ids": number[],
    "original_language": string,
    "overview": string,
    "vote_average": string,
    "adult": boolean,
    "backdrop_path": string,
    "popularity": number,
    "poster_path": string,
    "video": boolean,
    "vote_count": number,
    "original_title": string
}

export const TemplateMovie : ITMDBMovieDto = {
    "id": 1,
    "title": "",
    "release_date": "",
    "genre_ids": [0],
    "original_language": "",
    "overview": "",
    "vote_average": "",
    "adult": false,
    "backdrop_path": "",
    "popularity": 0,
    "poster_path": "",
    "video": false,
    "vote_count": 0,
    "original_title": ""
}

export const FetchNowPlayingMovies = async (currentPage : number) => {
    return await fetch(`${baseUrl}/Movie/movie/playing?currentpage=${currentPage}`, {
        method: "GET",
        mode: "cors",
        // credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      })
        // return response body
        .then((response) => {
          if (response.ok) {
            console.log("login successful");
    
            return response.json();
          }
        })
        // catches any errors
        .catch((error) => {
          console.log(error);
          throw error;
        });
    };

export const FetchUpcomingMovies = async (currentPage : number) => {
    return await fetch(`${baseUrl}/Movie/movie/upcoming?currentpage=${currentPage}`, {
        method: "GET",
        mode: "cors",
        // credentials: "include",
        headers: {
            "Content-type": "application/json",
        },
        })
        // return response body
        .then((response) => {
            if (response.ok) {
            console.log("login successful");
    
            return response.json();
            }
        })
        // catches any errors
        .catch((error) => {
            console.log(error);
            throw error;
        });
    };