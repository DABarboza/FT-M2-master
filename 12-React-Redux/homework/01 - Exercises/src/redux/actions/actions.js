import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";
import axios from "axios";

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

const getStoreName = () => {
  return (dispatch) => {
    axios("http://localhost:3001/stores")
      .then(({ data }) => {
        dispatch({
          type: GET_STORE_NAME,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { addProduct, deleteProduct, getStoreName };
