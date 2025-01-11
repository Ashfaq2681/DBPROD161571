<<<<<<< HEAD
import React from 'react';
import './App.css';
import Header from './components/Header';
import Desktop from './components/Desktop';
import ImageGallery from './components/Images';
import Footer from './components/Footer';
// Remove unused imports
import Download from './components/Download';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/Blog';
//import Hero from './components/1Desktop';
import Subscription from './components/subscribe';
import Chatbot from './components/chatbot';

const App = () => {
  return (
    <div>
      <Header />
      <Desktop />
      <ImageGallery />
     {/* Uncomment and use these if needed */}
      <Download />
      <Login />
      <Signup />
      <Blog />
      <Subscription/>
      <Footer /> 
      {/* <Hero/>
      {/* <Chatbot/> */}
    </div>
  );
};
=======
import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Home from "./home";
function App() {
  return (
    <>
      {/* <Header />
      <Content />
      <Footer /> */}
      <Home />
    </>
  );
}
>>>>>>> 1779cb4 (changes to be commited)

export default App;
