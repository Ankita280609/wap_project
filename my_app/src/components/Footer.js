
// import React from 'react';


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li>About Us</li>
//             <li>Services</li>
//             <li>Privacy Policy</li>
//             <li>Terms of Service</li>
//           </ul>
//         </div>

//         <div className="footer-section footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: contact@yourcompany.com</p>
//           <p>Phone: +1 234 567 890</p>
//         </div>

//         <div className="footer-section">
//           <h4>Follow Us</h4>
//           <div className="footer-social-icons">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-linkedin-in"></i>
//             <i className="fab fa-instagram"></i>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         © 2025 Your Company Name. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;???
// // import React from "react"
// // const Footer =()=>(
// //     <footer className="footer">
//         <div className="footer-container"></div>
//         <div className="footer-section">
// //         <ul>
// //             <li><a href="google.com">About Us</a></li>
// //             <li><a href="google.com">Services</a></li>
// //             <li><a href="google.com">Privacy Policy</a></li>
// //             <li><a href="google.com">Terms of Services</a></li>
// //         </ul>
// //         <p>Contact:(555) 555-555 | info@example.com</p>
// //             <div className="social-media">
// //                 <a href="google.com"><i className="fab fa-facebook"></i></a>
// //                 <a href="google.com"><i className="fab fa-twitter"></i></a>
// //                 <a href="google.com"><i className="fab fa-linkedin"></i></a>
// //                 <a href="google.com"><i className="fab fa-instagram"></i></a>
// //             </div>
// //         <p>@ 2025 rights</p>
// //     </footer>
// // )
// // export default Footer
import React from 'react';

const Footer = ({ onChangePage }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button className="footer-link" onClick={() => onChangePage("home")}>Home</button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onChangePage("about")}>About</button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onChangePage("products")}>Services</button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onChangePage("blog")}>Blog</button>
            </li>
            
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;