// // import React from "react"
// const HeroSection=()=>{
//     return(
//         <section className="hero">
//             <div className="hero-content">
//                 <div className="tagline">
//                     <h1>Your Product Review Hub</h1>
//                     <p>Discover and share honest review about the latest products.</p>
//                 </div>
//                 <form className="contact-form">
//                     <h2 className="contact-heading">Reach out to us</h2>
//                     <input type="text" placeholder="Name"/>
//                     <input type="email" placeholder="Email"/>
//                     <textarea placeholder="Message"></textarea>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </section>
//     )
// }
// export default HeroSection
import React, { useState } from "react";
import emailjs from "emailjs-com";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs.send(
      "service_3v6tgdq",
      "template_qntxnen",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "HiqVGjyNc8asDdYkj"
    ).then((response) => {
      console.log("SUCCESS sending to you!", response.status, response.text);
    }, (err) => {
      console.log("FAILED sending to you...", err);
    });

    emailjs.send(
      "service_3v6tgdq",
      "template_xh7brd4",
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message, 
      },
      "HiqVGjyNc8asDdYkj"
    ).then((response) => {
      console.log("SUCCESS auto-reply!", response.status, response.text);
      alert("Thank you for reaching out!");
      setFormData({ name: "", email: "", message: "" });
    }, (err) => {
      console.log("FAILED auto-reply...", err);
      alert("Oops, something went wrong. Please try again.");
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="tagline">
          <h1>Your Product Review Hub</h1>
          <p>Discover and share honest review about the latest products.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-heading">Reach out to us</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;