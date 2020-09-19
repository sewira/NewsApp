export const initialState = [];

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type == "GET_DATA":
      return { state: action.payload };

    default:
      return state;
  }
};
