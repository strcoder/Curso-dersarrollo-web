import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
// import Box from './components/Box';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/header' component={Header} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
