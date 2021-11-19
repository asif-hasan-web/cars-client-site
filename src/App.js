import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import ContextProvider from './Contexts/ContextProvider';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import { Placeholder } from 'react-bootstrap';
import PlaceOrder from './pages/PlaceOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NewDashboard from './Component/Dashboard/NewDashboard/NewDashboard';

function App() {
  return (
   <>
   <ContextProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <NewDashboard />
        </PrivateRoute>
        <PrivateRoute path="/placeorder/:id">
          <PlaceOrder />
        </PrivateRoute>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path='*'>
              <PageNotFound/>
            </Route>
      </Switch>
  </Router>
  </ContextProvider>
   </>
  );
}

export default App;
