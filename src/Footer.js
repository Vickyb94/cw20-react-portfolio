
import React from 'react';
//import icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <a  href="https://github.com/Vickyb94">
              <FaGithub  
                 size={20}
                 style={{ color: "rgb(223, 116, 77)",
                 marginRight: "1rem"}}/>
            </a>
            <a href="https://www.linkedin.com/in/victoria-developer/">
                <FaLinkedin
                    size={20}
                    style={{ color: "rgb(223, 116, 77)",
                    marginRight: "1rem"}}/>
               </a>
            <a href="https://twitter.com/eji_row">
               <FaTwitter
                  size={20}
                  style={{ color: "rgb(223, 116, 77)",
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