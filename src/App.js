import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Containers
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

//Components
import Home from './components/Home/Home';
import RegisterCustomer from './components/RegisterCustomer/RegisterCustomer';
import RegisterRestaurant from './components/RegisterRestaurant/RegisterRestaurant';
import Login from './components/Login/Login';
import DetailRestaurant from './components/DetailRestaurant/DetailRestaurant';
import DetailMenu from './components/DetailMenu/DetailMenu';
import CreateMenu from './components/CreateMenu/CreateMenu';
import OrderRestaurant from './components/OrderRestaurant/OrderRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import UpdateCustomer from './components/UpdateCustomer/UpdateCustomer';



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
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/restaurant" exact component={DetailRestaurant} />
          <Route path="/order/detail" exact component={DetailMenu} />
          <Route path="/menu/create" exact component={CreateMenu} />
          <Route path="/restaurant/profile" exact component={OrderRestaurant} />
          <Route path="/restaurant/update" exact component={UpdateRestaurant} />
          <Route path="/customer/update" exact component={UpdateCustomer} />


        </Switch>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
