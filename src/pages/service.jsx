import { useEffect } from "react";
import ServiceBg from "../components/serviceBg";
import ServComp from "../components/servComp";
import Banner from "../components/banner";
import Sliderr from "../components/sliderr";
import ContactComp from "../components/contactComp";
import CardStyle from "../components/cardStyle";

function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
   <ServiceBg/>
   <ServComp/>
   {/* <Banner/> */}
   <CardStyle/>
   <Sliderr/>
   <ContactComp/>

    </>
  )
}

export default Service