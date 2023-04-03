
import React from 'react';
//import icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons';

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <a  href="https://github.com/Vickyb94">
              <FaGithub  
                 size={30}
                 style={{ color: "#fff",
                 marginRight: "1rem"}}/>
            </a>
            <a href="https://www.linkedin.com/in/victoria-developer/">
                <FaLinkedin
                    size={30}
                    style={{ color: "#fff",
                    marginRight: "1rem"}}/>
               </a>
            <a href="https://twitter.com/eji_row">
               <FaTwitter
                  size={30}
                  style={{ color: "#fff",
                  marginRight: "1rem"}}/>
            </a>
        </div>
        <div className="copyright">
            <p>Vickyb94@2023</p>
        </div>
    </div>
  )
}

export default Footer;