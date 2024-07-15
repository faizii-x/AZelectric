import { useEffect } from "react";
import Hero from "../components/hero";

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
      <Hero />
    </>
  );
}

export default Landing;
