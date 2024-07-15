import { useEffect } from "react";


function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <h4 className="text-white text-2xl">About</h4>
    
    </>
  )
}

export default About