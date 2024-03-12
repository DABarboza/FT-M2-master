const initialState = {
  //! EL ESTADO ES UN OBJETO!!!!
  characters: [
    {
      id: 1,
      name: "Goku",
    },
    {
      id: 2,
      name: "Vegeta",
    },
    {
      id: 3,
      name: "Trunks",
    },
  ],
  //! EL ESTADO ES UN OBJETO!!!!
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
