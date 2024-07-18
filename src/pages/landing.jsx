import { useEffect } from "react";
import Hero from "../components/hero";
import SeconSection from "../components/seconSection";
import MainService from "../components/mainService";
import ThreeImg from "../components/threeImg";
import Faq from "../components/faq";
import ContactComp from "../components/contactComp";
import Footer from "../components/footer";

function Landing() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <>
      <Hero />
      <SeconSection/>
      <MainService/>
      <ThreeImg/>
      <Faq/>
      <ContactComp/>
      <Footer/>
    </>
  );
}

export default Landing;
