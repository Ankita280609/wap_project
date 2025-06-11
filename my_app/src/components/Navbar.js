// // import React from "react"

// // const Navbar=()=>{
// //     const handleLoginClick=(e)=>{
// //         e.preventDefault();
// //         window.location.href="/login.html";
// //     }
// //     return (
// //         <nav>
// //             <div className="logo">
// //                 <p><i>Revuva</i></p>
// //             </div>
// //             <ul>
// //                 <li><a href="#">Home</a></li>
// //                 <li><a href="#">About</a></li>
// //                 <li><a href="#">Services</a></li>
// //                 <li><a href="#">Blog</a></li>
// //             </ul>
// //                 <a href="/login.html" className="login" onClick={handleLoginClick}>Login</a>
// //         </nav>
// //     );
// // };

// // export default Navbar;
// import React from "react";

// const Navbar = ({ currentPage, onChangePage }) => {
//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/login.html";
//   };

//   return (
//     <nav>
//       <div
//         className="logo"
//         onClick={() => onChangePage("home")}
//         style={{ cursor: "pointer" }}
//       >
//         <p>
//           <i>Revuva</i>
//         </p>
//       </div>
//       <div className="nav-center">
//         <ul>
//           <li>
//             <a
//               href="#"
//               className={currentPage === "home" ? "active" : ""}
//               onClick={e => {
//                 e.preventDefault();
//                 onChangePage("home");
//               }}
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className={currentPage === "about" ? "active" : ""}
//               onClick={e => {
//                 e.preventDefault();
//                 onChangePage("about");
//               }}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Blog</a>
//           </li>
          
//         </ul>
//       </div>
//       <a
//         href="/login.html"
//         className="login"
//         onClick={handleLoginClick}
//       >
//         Login/Sign Up
//       </a>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";

const Navbar = ({ currentPage, onChangePage }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    window.location.href = "/login.html";
  };

  return (
    <nav>
      <div
        className="logo"
        onClick={() => onChangePage("home")}
        style={{ cursor: "pointer" }}
      >
        <p>
          <i>Revuva</i>
        </p>
      </div>
      <div className="nav-center">
        <ul>
          <li>
            <a
              href="#"
              className={currentPage === "home" ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                onChangePage("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "about" ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                onChangePage("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "products" ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                onChangePage("products");
              }}
            >
              Products/Services
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          
        </ul>
      </div>
      <a
        href="/login.html"
        className="login"
        onClick={handleLoginClick}
      >
        Login/Sign Up
      </a>
    </nav>
  );
};

export default Navbar;