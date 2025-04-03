import React from "react";

function MovieData(props) {
  return (
    <div>
      {props.movieData.map((movie, key) => (
        <div className="container" key={key}>
          <h2>{movie.id}</h2>
          <h1>{movie.name}</h1>
          <img src={movie.image} />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieData;
