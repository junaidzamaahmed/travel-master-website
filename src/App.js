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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
          <PrivateRoute path='/addpackage'>
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute path='/manageallbookings'>
            <ManageAllBookings></ManageAllBookings>
          </PrivateRoute>
          <PrivateRoute path='/mybookings/:userID'>
            <MyBookings></MyBookings>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/packages/:id'>
            <PackageDetail></PackageDetail>
          </PrivateRoute>
          <PrivateRoute path='/bookingsuccessful'>
            <BookingSuccessful></BookingSuccessful>
          </PrivateRoute>
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
