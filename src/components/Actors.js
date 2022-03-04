import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actorss.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <h2>Movies</h2>
          <ul>
            {actor.movies.map((movie,index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
        ))}
        </div>
  );
            }


//This component should render the text Actors Page in an <h1>, and make a new <div> for each actor. 
//The <div> should contain the actor's name and a <ul> with a list of their movies.
export default Actors;
