import React from 'react';
import { movies } from '../data';


//when mapping over an array, start with a key of the index
const Movies = () => {
  return (
    <div>
      {movies.map((movie, index))}
        <h1>Movies Page</h1>

        <div key={index}>
          <h2>{movie.title}</h2>
          <h2>{movie.time}</h2>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre,index) => (
              <li key={index}>{genre}</li>
            ))}

          </ul>





        </div>
    </div>
  );
};

//This component should render the text Movies Page in an <h1>, and make a new <div> for each movie.
// The <div> should contain the movie's title, time and a <ul> with a list of its genres.
//map through this
export default Movies;
