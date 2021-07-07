import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PeopleDetails = () => {
const { peopleid } = useParams();
const [people, setPeople] = useState(null);

useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
      .then((response) => response.json())
      .then((allPeople) => setPeople(allPeople));
  }, [peopleid]);

return (
    <>
    <h1 className ="m-3 d-flex justify-content-center">Detail For {people?.name} </h1>
    <div className="container-people d-flex flex-wrap row justify-content-center">
    <div className="card m-4 d-flex flex-column col-6 flex-row align-items-center" key={`item-${people?.id}`}>
              <div className="card-text m-2">Gender: {people?.gender}</div>
              <div className="card-text m-2">Age: {people?.age}</div>    
              <a href={people?.url} target="blank" className="text-decoration-none">
                API Resource Link
              </a>
            </div>
        </div>
    <Link to='/people' className="btn btn-white text-primary d-flex justify-content-center">Go Back to People</Link>

    </>
)

}

export default PeopleDetails;