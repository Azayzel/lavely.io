import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import Layout from './components/Layout'
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <BaseRouter/>
      </Layout>
    </Router>
  );
}

export default App;
