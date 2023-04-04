import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

   //checking the value of the currentpage
   const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <About />;
   };

   const handlePageChange = (page) => setCurrentPage(page);
   
   //passing the currentPage from state and the function to update it
   return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}></NavTabs>
        {renderPage()}  
    </div>
   );
}