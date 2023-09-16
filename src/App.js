import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header />
      <Banner /> */}
      <UnderConstruction></UnderConstruction>
      {/* <Nav /> */}
      {/* <About />
      <Services /> */}
      {/* <Work />
      <Contact /> */}
      <Routes>
        <Route path="*" element={<UnderConstruction></UnderConstruction>}></Route>
        <Route path="/under" element={<UnderConstruction></UnderConstruction>}></Route>
      </Routes>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
