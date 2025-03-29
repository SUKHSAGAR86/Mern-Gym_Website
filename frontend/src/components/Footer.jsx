// // import React from 'react'

// // const Footer = () => {
// //   return (
// //     <footer>
// //         Designed And Developed By CodeWithZeeshu
// //     </footer>
// //   )
// // }

// // export default Footer


// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h2 className="footer-title">BEAST MODE GYM</h2>
//           <p>Unleash your inner beast. Train harder, get stronger.</p>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-subtitle">Quick Links</h3>
//           <ul className="footer-links">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/about">About Us</a>
//             </li>
//             <li>
//               <a href="/classes">Classes</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-subtitle">Follow Us</h3>
//           <div className="footer-social">
//             <a href="#">
//               <FaFacebookF />
//             </a>
//             <a href="#">
//               <FaInstagram />
//             </a>
//             <a href="#">
//               <FaTwitter />
//             </a>
//             <a href="#">
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           &copy; {new Date().getFullYear()} Beast Mode Gym. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(""); 
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
  
        <div className="footer-section">
          <h2 className="footer-title">BEAST MODE GYM</h2>
          <p>Unleash your inner beast. <br/>Train harder, get stronger.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/classes">Classes</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

     
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p>
            <FaPhone /> +1 234 567 890
          </p>
          <p>
            <FaEnvelope /> info@beastgym.com
          </p>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-subtitle">Subscribe to Our Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Beast Mode Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
