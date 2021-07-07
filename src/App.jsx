import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Films from './components/Films'
import People from './components/People'
import FilmsDetails from './components/FilmsDetails';
import PeopleDetails from './components/PeopleDetails';


const App = () => {
    return (
        <BrowserRouter>
        <nav className="container d-flex justify-content-between my-2 shadow">
        <Link to="/films" className="btn btn-white text-primary col-2 align-self-center">
    View Films
</Link>
<Link to="/" className="btn btn-white text-primary col-2 align-self-center">
    Go Home
</Link>
<Link to="/people" className="btn btn-white text-primary col-2 align-self-center">
    View People
</Link>
    </nav> 

        <main className="container">

        <Switch>
            <Route exact path='/'>
            <div className="container d-flex row justify-content-center my-4">
                <h1 className="col-4">Studio Ghibli Routing</h1>
        <img
          src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg"
          alt=""
          width="1000"
          height="500"
        />
      </div>

            </Route>
            
            <Route exact path='/films'>
            < Films />
            </Route>
            <Route exact path='/films/:filmid'>
                < FilmsDetails />
            </Route>

            <Route exact path='/people'>
            < People />
            </Route>
            <Route exact path='/people/:peopleid'>
                < PeopleDetails />
            </Route>

        </Switch>
                </main>
        </BrowserRouter>
    );
};

export default App;