import React from 'react';
import '../../css/main.css';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import LiveMatches from './LiveMatches';

const App = () => {
  return (
    <>
      <div id="container">
        <Header />
        <NavBar />
        <LiveMatches />
        <Footer />
      </div>
    </>
  );
};

export default App;
