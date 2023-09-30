

export const removeFavorite = (movie)=>{
    return {
        type : 'REMOVE_FAVORITE',
        payload : movie
}
}
