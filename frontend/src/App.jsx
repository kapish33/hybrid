import React from 'react';
import Layout from './component/Layout';
import './App.css';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
