import { useEffect } from "react";

function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <h4 className="text-white text-2xl text-center pt-24 pb-8">Service Page</h4>

    </>
  )
}

export default Service