import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <h5 className="text-white text-2xl text-center pt-24 pb-8">Contact</h5>
    
    </>
  )
}

export default Contact