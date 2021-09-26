
import './App.css'
import Cliente from './componentes/Cliente';
import Usuario from './componentes/Usuario';
import Login from './componentes/Login';
import Cabecalho from './componentes/Cabecalho';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
          <Route path="/" exact>

          </Route>
          <Route path="/cliente" exact>
            <Cliente />
          </Route>
          <Route path="/usuario" exact>
            <Usuario />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;


// up