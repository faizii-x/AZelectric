import { useEffect } from "react";
import Heroo from "../../public/png/hero.png";
import Counter from "./counter";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="pt-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3 max-w-full container mx-auto">
          <div className="col-span-1 self-center">
            <p className="text-customGreen-para font-Nunito text-[16px] font-bold">
              Welcome to A to Z Electric
            </p>
            <h1 className="text-[24px] font-Nunito text-white font-bold leading-8">
              Powering Your World with{" "}
              <span className="text-customGreen-para">
                Reliable Electricity Solution
              </span>
            </h1>

            <p className="text-white font-Nunito text-[18px] font-light mt-1">
              Join thousands of satisfied customers who trust us for reliable
              and professional electrical services. From installations to safety
              measures, we ensure your power needs are met with excellence.
            </p>

            <div
            // className=" border text-customGreen-para p-3 rounded-lg w-[150px] cursor-pointer mt-4 hover:bg-customGreen-light hover:text-white flex justify-center items-center">
            >
              <button className="button mt-4 mb-8 z-10">Get Started</button>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src={Heroo}
              alt=""
              className=" lg:float-right block mx-auto"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* ............................ */}

      <Counter />
    </>
  );
}

export default Hero;
