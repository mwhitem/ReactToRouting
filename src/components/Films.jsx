import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
          .then((response) => response.json())
          .then((allFilms) => setFilms(allFilms));
      }, []);
return (
    <>

<div className="container-film d-flex flex-wrap justify-content-center">
          {films.map((films) => (
            <div
              className="card m-4 d-flex flex-column col-4 flex-row align-items-center"
              key={`item-${films.id}`}
            >
              <div className="card-title m-2">{films.title}</div>
              <div className="card-subtitle text-muted m-2">
                {films.director}
              </div>
              <Link to={`/films/${films.id}`} className="btn btn-white text-primary">Read More</Link>
            </div>
          ))}
        </div>
    </>
)
}

export default Films;