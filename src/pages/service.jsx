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
    
    <h4 className="text-white text-2xl">Service</h4>

    </>
  )
}

export default Service