import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Wrapper from './Wrapper';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
