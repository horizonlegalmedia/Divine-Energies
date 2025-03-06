import React, { useRef } from "react";

import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import WhatIDo from '../components/WhatIDo'
import Services from '../components/Services'
import Consultation from '../components/Consultation'
import LetsMeet from '../components/LetsMeet'

const Home = () => {
  const aboutUsRef = useRef(null);
  const whatIDoRef=useRef(null)
  const servicesRef = useRef(null);
  const consultationRef = useRef(null);
  const letsMeetRef = useRef(null);

  // const scrollToAboutUs = () => aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  // const scrollToWhatIDo = () => whatIDoRef.current?.scrollIntoView({ behavior: "smooth" });
  // const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  // const scrollToConsultation = () => consultationRef.current?.scrollIntoView({ behavior: "smooth" });
  // const scrollToLetsMeet = () => letsMeetRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
       {/* Navigation */}
       <Navbar
                scrollToAboutUs={aboutUsRef}
                scrollToWhatIDo={whatIDoRef}
                scrollToServices={servicesRef}
                scrollToConsultation={consultationRef}
                scrollToLetsMeet={letsMeetRef}
            />

      <AboutUs ref={aboutUsRef}/>
      <Services ref={servicesRef}/>
      <WhatIDo ref={whatIDoRef}/>
      <Consultation ref={consultationRef}/>
      <LetsMeet ref={letsMeetRef}/>
    </div>
  )
}

export default Home
