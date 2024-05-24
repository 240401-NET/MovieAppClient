const baseUrl = "http://localhost:5013";

export const baseimagepath = "https://image.tmdb.org/t/p/w500";

export interface ITMDBMovieDto {
    "movieId": number,
    "title": string,
    "releaseDate": string,
    "genre": string,
    "isFavorited": boolean,
    "purchasedTickets": boolean,
    "movieLanguage": string,
    "rating": string,
    "nowPlaying": boolean,
    "posterPath": string,
    "movieDescription": string,
    "userMovies": []
}

export const TemplateMovie : ITMDBMovieDto = {
    "movieId": 1,
    "title": "",
    "releaseDate": "",
    "genre": "",
    "isFavorited": false,
    "purchasedTickets": false,
    "movieLanguage": "en",
    "rating": "",
    "nowPlaying": false,
    "posterPath": "",
    "movieDescription": "",
    "userMovies": []
}

// export const FetchNowPlayingMovies = async (currentPage : number) => {
//     return await fetch(`${baseUrl}/Movie/movie/playing?currentpage=${currentPage}`, {
//         method: "GET",
//         mode: "cors",
//         // credentials: "include",
//         headers: {
//           "Content-type": "application/json",
//         },
//       })
//         // return response body
//         .then((response) => {
//           if (response.ok) {
//             console.log("login successful");
    
//             return response.json();
//           }
//         })
//         // catches any errors
//         .catch((error) => {
//           console.log(error);
//           throw error;
//         });
//     };

export const FetchUpcomingMovies = async (currentPage : number) => {
    return await fetch(`${baseUrl}/Movie/upcoming/${currentPage}`, {
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
            return response.json();
            }
        })
        // catches any errors
        .catch((error) => {
            console.log(error);
            throw error;
        });
    };


export const SearchMovieByGenre = async (currentPage : number, genre: string) => {
  return await fetch(`${baseUrl}/Movie/search/${genre}/${currentPage}`, {
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
          return response.json();
          }
      })
      // catches any errors
      .catch((error) => {
          console.log(error);
          throw error;
      });
  };
  
export const SearchMovieByLanguage = async (currentPage : number, language: string) => {
  return await fetch(`${baseUrl}/Movie/search/language=${language}/${currentPage}`, {
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
          return response.json();
          }
      })
      // catches any errors
      .catch((error) => {
          console.log(error);
          throw error;
      });
  };

export const SearchMovieByTitle = async (title: string) => {
  return await fetch(`${baseUrl}/Movie/search/${title}`, {
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
          return response.json();
          }
      })
      // catches any errors
      .catch((error) => {
          console.log(error);
          throw error;
      });
  };

  
    