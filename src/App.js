import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Home />
        </Switch>
        <Footer />

      </BrowserRouter>



    </>
  );
}

export default App;
