import React from "react";
import AddFavourites from "./AddFavourites";

import RemoveFavourites from "./RemoveFavourites";

const MovieList = (props) => {
    const FavouritesComponent = props.FavouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex" >
                    <img src={movie.Poster} alt="ok"></img>
                    <div
                        onClick = {() => props.handleFavouritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center">
                        <AddFavourites />
                       
                        

                       
                    </div>
                    
                </div>
            ))}
        
        </>
    );
}

export default MovieList;