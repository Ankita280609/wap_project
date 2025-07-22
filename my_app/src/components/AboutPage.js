import React from "react";
import CompanyHistory from "./CompanyHistory";
import ReviewPurpose from "./ReviewPurpose";
import TeamCarousel from "./TeamCarousel";
import HeroAbout from "./HeroAbout";
import FAQSection from "./FAQSection";

 const AboutPage=()=>(
    <div>
        <HeroAbout/>
        <CompanyHistory/>
        <ReviewPurpose/>
        <FAQSection/>
        <TeamCarousel/>
    </div>
 )
 export default AboutPage;