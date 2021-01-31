import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

        </Switch>
        <Footer />

      </BrowserRouter>



    </>
  );
}

export default App;
