import Navbar from './Navbar'; //can also write Navbar.js
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {

  return (
    <Router>  {/* Routes must be in BrowserRouter to work */}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>  {/* Switch used to swap whats present in conent div among the various routes */}
            <Route exact path="/">  {/* exact path used for exact match, else path would match anything STARTING with it */}
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />  {/* one of the many components */}
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">  {/* all other paths, like a default/else block */}
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
