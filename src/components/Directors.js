import React from 'react';
import { directors } from '../data';


////This component should render the text Directors Page in an <h1>, and make a new <div> for each director.
// The <div> should contain the director's name and a <ul> with a list of their movies.
const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <h2>Movies</h2>
          <ul>
            {director.movies.map((movie,index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
        ))}
        </div>
  );
            }




export default Directors
