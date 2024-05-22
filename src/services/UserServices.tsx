const baseUrl = "http://localhost:5173/api"; // change this to the url that we eventually use

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
