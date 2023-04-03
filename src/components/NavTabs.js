import React from 'react';

//assign variable names
function NavTabs ({ currentPage, handlePageChange }) {
    return (
        <div className="nav-container">
            <h1>Victoria Arowosafe</h1>
        <ul className="nav-bar">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active'  : 'nav-link'}>
                About
                </a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active'  : 'nav-link'}>
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active'  : 'nav-link'}>
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'resume' ? 'nav-link active'  : 'nav-link'}>
                Resume
                </a>
            </li>
        </ul>
    </div>
    );
}

export default NavTabs;