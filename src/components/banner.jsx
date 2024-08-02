import Group1 from "../../public/png/group1.png";
import Picy1 from "../../public/png/picy1.png";

function Banner() {
  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center mt-8"
        style={{ backgroundImage: `url(${"/png/cutBg.png"})` }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-full">
          <div>
            <img src={Group1} alt="" />
          </div>
          <div>
        <p className="text-white font-Roboto font-extrabold text-[75px] leading-[70px]">Electrical Technician <span className="text-customGreen-light">Services</span></p>
         
         <p className="text-white text-[18px] mt-3 lg:w-[50%] w-full ">Contact us today to schedule your service and experience the difference firsthand!</p>
         
         <div className="flex justify-start gap-3">
          <div>
            <img src={Picy1} alt="" />
          </div>
         </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
