
import React from "react";
import Container from "../../component/container/container.component";
import Client from "../../component/clients/clients.component";
import WhyUs from "../../component/why-us/why-us.component";
import AboutUs from "../../component/aboutUs/about.component";
import SkillSection from "../../component/skills-section/skills.component";

const HomePage =() =>{
    return(
        <>
            <Container />
            <Client />
            <AboutUs />
            <WhyUs />
            <SkillSection />
        </>
    )
}
export default HomePage;