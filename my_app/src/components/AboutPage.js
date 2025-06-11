import React from "react";
import CompanyHistory from "./CompanyHistory";
import ReviewPurpose from "./ReviewPurpose";
import TeamCarousel from "./TeamCarousel";
import HeroAbout from "./HeroAbout"

 const AboutPage=()=>(
    <div>
        <HeroAbout/>

        <CompanyHistory/>
        <ReviewPurpose/>
        <TeamCarousel/>
    </div>
 )
 export default AboutPage;