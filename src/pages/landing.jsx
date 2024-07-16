import { useEffect } from "react";
import Hero from "../components/hero";
import SeconSection from "../components/seconSection";

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
    </>
  );
}

export default Landing;
