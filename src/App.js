import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

        </Switch>

      </BrowserRouter>



    </>
  );
}

export default App;
