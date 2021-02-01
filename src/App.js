import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';

import Home from './components/Home/Home';
import RegisterCustomer from './components/RegisterCustomer/RegisterCustomer';
import RegisterRestaurant from './components/RegisterRestaurant/RegisterRestaurant';
import Login from './components/Login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/customer/signup" exact component={RegisterCustomer} />
          <Route path="/restaurant/signup" exact component={RegisterRestaurant} />
          <Route path="/login" exact component={Login} />

        </Switch>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
