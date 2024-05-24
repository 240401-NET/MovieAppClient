const baseUrl = "http://localhost:5013/api"; // change this to the url that we eventually use

export const UserLogin = async (userName: string, password: string) => {
  return await fetch(`${baseUrl}/User/login`, {
    method: "POST",
    mode: "cors",
    // credentials: "include",
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    // return response body
    .then((response) => {
      if (response.ok) {
        console.log("login successful");

        return response;
      }
    })
    // catches any errors
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const UserLogout = () => {
  return (
    fetch(baseUrl /*{+ "whatever the endpoint is"}*/, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      // empty request body because we don't need to explicitly send any information when logging out with identity
      body: "",
      headers: {
        "Content-type": "application/json",
      },
    })
      // checks if response is okay => console logs response because we have to do something with the response
      .then((response) => {
        if (response.ok) {
          return response;
        }
      })
      // catches any error
      .catch((error) => {
        console.log(error);
        throw error;
      })
  );
};

export const UserRegistration = (
  name: string,
  userName: string,
  email: string,
  password: string
) => {
  return (
    fetch(`${baseUrl}/User/register`, {
      method: "POST",
      mode: "cors",
      //   credentials: "include",
      body: JSON.stringify({
        name: name,
        username: userName,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      // return response body
      .then((response) => {
        if (response.ok) {
          console.log("registration successful");
          return response;
        }
      })
      // catches any error
      .catch((error) => {
        console.log(error);
        throw error;
      })
  );
};

export const AddMovieToFavorites = async (username: string, title: string, movieId: number, movieDescription: string, poster_path: string) => {
  return await fetch(`${baseUrl}/User/addFavoriteMovie`, {
      method: "POST",
      mode: "cors",
      // credentials: "include",
      body: JSON.stringify({
        username: username,
        movieTitle: title,
        movieId: movieId,
        description: movieDescription,
        posterPath: (poster_path !== null ? poster_path = poster_path : poster_path = "/assets/placeholderimage.png")
      }),
      headers: {
          "Content-type": "application/json",
      },
      })
      // return response body
      .then((response) => {
          if (response.ok) {
          window.alert("Movie added to favorites!");
          }
      })
      // catches any errors
      .catch((error) => {
          console.log(error);
          throw error;
      });
  };

export const SearchMovieByFavorites = async (username: string) => {
  return await fetch(`${baseUrl}/User/${username}/favorites`, {
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

  export const DeleteMovieFromFavorites = async (username: string, title: string, movieId: number, movieDescription: string, poster_path: string) => {
    return await fetch(`${baseUrl}/User/removeFavorite/`, {
        method: "DELETE",
        mode: "cors",
        // credentials: "include",
        body: JSON.stringify({
          username: username,
          movieTitle: title,
          movieId: movieId,
          description: movieDescription,
          posterPath: (poster_path !== null ? poster_path = poster_path : poster_path = "/assets/placeholderimage.png")
        }),
        headers: {
            "Content-type": "application/json",
        },
        })
        // return response body
        .then((response) => {
            if (response.ok) {
              window.alert("Movie deleted from favorites!");
            }
        })
        // catches any errors
        .catch((error) => {
            console.log(error);
            throw error;
        });
    };