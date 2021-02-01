import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';

import Home from './components/Home/Home';
import RegisterCustomer from './components/RegisterCustomer/RegisterCustomer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/customer/signup" exact component={RegisterCustomer} />

        </Switch>
        <Footer />

      </BrowserRouter>



    </>
  );
}

export default App;
