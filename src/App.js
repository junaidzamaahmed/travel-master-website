import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { initializeAuthentication } from './Firebase/firebase.init';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import AddPackage from './components/AddPackage/AddPackage';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import MyBookings from './components/MyBookings/MyBookings';

initializeAuthentication()

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/addpackage'>
            <AddPackage></AddPackage>
          </Route>
          <Route path='/manageallbookings'>
            <ManageAllBookings></ManageAllBookings>
          </Route>
          <Route path='/mybookings'>
            <MyBookings></MyBookings>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
