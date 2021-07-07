import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const People = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
          .then((res) => res.json())
          .then((allPeople) => setPeople(allPeople));
      }, []);
return (
    <>



<div className="container-people d-flex flex-wrap justify-content-center">
          {people.map((people) => (
            <div
              className="card m-4 d-flex flex-column col-6 align-items-center"
              key={`item-${people.id}`}
            >
              <div className="card-title m-2 fw-bold">Name: {people.name}</div>
              <Link to={`/people/${people.id}`} className="btn btn-white text-primary">Read More</Link>

            </div>
          ))}
        </div>
    </>
)
}

export default People;