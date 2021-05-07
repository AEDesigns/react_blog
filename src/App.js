import Navbar from './components/navbar';
import Home from './components/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/createBlog';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
