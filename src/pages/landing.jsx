import { useEffect } from "react";
import Hero from "../components/hero";
import SeconSection from "../components/seconSection";
import MainService from "../components/mainService";

function Landing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero />
      <SeconSection/>
      <MainService/>
    </>
  );
}

export default Landing;
