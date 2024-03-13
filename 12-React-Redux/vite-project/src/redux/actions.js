import { GET_USERS, INCREMENT_COUNTER } from "./action-types";

// //! DE ESTA MANERA TRAIGO LA INFO DE UNA API

//*           AXIOS
export const getAllUsers = () => {
  return (dispatch) => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        return dispatch({ type: GET_USERS, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//*             FETCH
// export const getAllUsers = () => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => dispatch({ type: GET_USERS, payload: data }));
//   };
// };
// //! DE ESTA MANERA TRAIGO LA INFO DE UNA API

export const incrementCounter = () => {
  return { type: INCREMENT_COUNTER };
};
