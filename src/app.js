import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import Home from './pages/App';
import Contatos from './pages/Contato';
import Erro from './pages/Erro';
import Nav from './pages/Nav';

ReactDOM.render((
    <BrowserRouter>
    <div>
        <Nav />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contatos" component={Contatos} />
            <Route path="/placar" component={App} />
            <Route component={Erro} />
        </Switch>
    </div>
    </BrowserRouter>
),
    document.getElementById('app')
);
