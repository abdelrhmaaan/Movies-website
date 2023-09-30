
export const addToFavorites = (movie) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: movie,
    };
};
