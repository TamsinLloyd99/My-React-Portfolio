import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Projects from './Projects';
import Contact from './Contact';




function RenderPage() {

  const [currentPage, setCurrentPage] = useState('home');

  const handlepageChange = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />
      default:
        return null;
        
    }
  }


  return (
    <>
    <Header currentPage={currentPage} handlepageChange={handlepageChange} />  
    {renderPage()}
    
    </>
  )
}

export default RenderPage