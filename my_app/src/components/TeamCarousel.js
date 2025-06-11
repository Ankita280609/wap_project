import React from "react";
const TEAM = [
  {
    name: "Priya Shah",
    role: "CEO & Founder",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Visionary leader with a passion for reliable user reviews."
  },
  {
    name: "Aditya Pathak",
    role: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Expert in scalable web and mobile solutions."
  },
  {
    name: "Meera Chawla",
    role: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Ensures every project delivers outstanding value."
  },
  {
    name: "Rakesh Singh",
    role: "Head of Support",
    photo: "https://randomuser.me/api/portraits/men/57.jpg",
    bio: "Building trust through world-class customer care."
  }
];
const TeamCarousel = () => (
  <section className="team-carousel">
    <h2>Meet the Team</h2>
    <div className="carousel-team">
      {TEAM.map((member, i) => (
        <div key={i} className="team-card">
          <img src={member.photo} alt={member.name} />
          <h4>{member.name}</h4>
          <span className="role">{member.role}</span>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamCarousel;