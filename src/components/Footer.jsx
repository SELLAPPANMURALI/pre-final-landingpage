// import React from 'react';
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter
// } from 'react-icons/fa6';
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         <div className="footer-about">
//           <h3>Space Zone India</h3>
//           <p>Inspiring the next generation in Satellite Technology, Rocketry, Drones, Astronomy & Space Science 🚀.</p>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact</h4>
//           <p>📍 Chennai, India</p>
//           <p>📞 +91 73959 60012</p>
//           <p>✉️ info@spacezoneindia.com</p>
//         </div>

//         <div className="footer-social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
//             <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
//           </div>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Space Zone India. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa6';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Space Zone India</h3>
          <p>Inspiring the next generation in Satellite Technology, Rocketry, Drones, Astronomy & Space Science 🚀.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Chennai, India</p>
          <p>📞 +91 73959 60012</p>
          <p>✉️ info@spacezoneindia.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/research.spacezoneindia/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/channel/UCT92SpAdZLE67p-ZPI4EzfA" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/spacezoneindia/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/space-zone-india/posts/?feedView=all" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Space Zone India. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
