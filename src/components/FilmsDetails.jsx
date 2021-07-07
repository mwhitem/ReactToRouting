import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FilmsDetails = () => {
const { filmid } = useParams();
const [films, setFilms] = useState(null);

useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((response) => response.json())
      .then((allFilms) => setFilms(allFilms));
  }, [filmid]);

return (
    <>
    <h1 className ="m-3 d-flex justify-content-center">Film Detail For {films?.title} </h1>
    <div className="container-film d-flex flex-wrap justify-content-center">
    <div
              className="card m-4 d-flex flex-column col-6 flex-row align-items-center"
              key={`item-${films?.id}`}
            >
              <div className="card-title m-2">{films?.original_title}</div>
              <div className="card-subtitle text-muted m-2">
                {films?.director}
              </div>
              <div className="card-text m-2">{films?.release_date}</div>
              <div className="card-text m-2">{films?.description}</div>
              <a href={films?.url} target="blank" className="text-decoration-none">
                API Resource Link
              </a>

            </div>

        </div>
              <Link to='/films' className="btn btn-white text-primary d-flex justify-content-center">Go Back to Films</Link>
    </>
)

}

export default FilmsDetails;