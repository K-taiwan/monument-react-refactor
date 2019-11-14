import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Landing /> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
