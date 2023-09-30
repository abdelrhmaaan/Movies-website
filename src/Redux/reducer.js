
const initialState = {
    favorites: [],
    count : 0,
    lang : 'EN'
  };
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
    if (!state.favorites.includes(action.payload)) {
        return {
        ...state,
          favorites: [...state.favorites, action.payload],
          count : state.count + 1,
        }
    };
      case 'REMOVE_FAVORITE':
        const updatedFavorites = state.favorites.filter(
          (movie) => movie !== action.payload
        );
        return {
          ...state,
          favorites: updatedFavorites,
          count: state.count - 1,
        };
      case 'CHANGE_LANG':
            
        return {
            ...state,
            lang : action.payload,
        };

      default:
        return state;
    }
  };
  
  export default movieReducer;