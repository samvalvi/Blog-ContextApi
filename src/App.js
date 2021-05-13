import React, {useContext} from 'react'
import Header from './components/header'
import Inicio from './components/inicio'
import Blog from './components/blog'
import ContentPost from './components/content-post'
import AcercaDe from './components/acerca-de'
import Error404 from './components/error404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {ContextoTema} from './contexts/context'


function App() {
  const {tema} = useContext(ContextoTema)

  return (
    <Router>
      <ContenedorPrincipal>
        <Header />

        <Main tema={tema}>
          <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/blog" component={Blog} />
            <Route path="/content-post/:id" component={ContentPost} />
            <Route path="/acerca-de" component={AcercaDe} />
            <Route component={Error404} />
          </Switch>
        </Main>

      </ContenedorPrincipal>
    </Router>
  )
}

const ContenedorPrincipal = styled.div`
  paddin: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${props => props.tema? props.tema.fuente + 'px' : '16px'};
  text-align: ${props => props.tema ? props.tema.alineado : 'left'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
