import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Footer from './components/Footer'
import Experience from './components/Experience';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />

        <Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/navbar" element={<NavBar />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about" element={<Experience />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/footer" element={<Footer />} />

        </Routes>

      </div>
    </>
  );
}

export default App;
