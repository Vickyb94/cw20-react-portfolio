import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

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
    return <Resume />;
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