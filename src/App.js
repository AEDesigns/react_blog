import Navbar from './components/navbar';
import Home from './components/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/createBlog';
import BlogDetails from './components/blogDetails';
import NotFound from './components/notFound';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6F3C89'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Girassol',
    fontWieghtLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </div>
      </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
