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
import PackageDetail from './components/PackageDetail/PackageDetail';
import NotFound from './components/NotFound/NotFound';
import BookingSuccessful from './components/BookingSuccessful/BookingSuccessful';

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
          <Route path='/mybookings/:userID'>
            <MyBookings></MyBookings>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/packages/:id'>
            <PackageDetail></PackageDetail>
          </Route>
          <Route path='/bookingsuccessful'>
            <BookingSuccessful></BookingSuccessful>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
