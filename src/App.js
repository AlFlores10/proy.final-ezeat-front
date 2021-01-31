import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';

import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />

      </BrowserRouter>



    </>
  );
}

export default App;
