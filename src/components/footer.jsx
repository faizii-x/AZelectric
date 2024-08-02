import FootLogo from "../../public/png/footLogo.png";
import Facebook from "../../public/png/Facebook.png";
import Linked from "../../public/png/Linked.png";
import Instagram from "../../public/png/instagram.png";
import Locate from "../../public/png/locate.png";
import Call from "../../public/png/call.png";
import Message from "../../public/png/message.png";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="text-gradient max-w-full mt-8">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 container mx-auto gap-2 p-4">
          <div className="col-span-2 mx-auto">
            <a href="/" onClick={handleScrollToTop}>
              <img src={FootLogo} alt="" className="w-[40%]" />
            </a>
            <p className="text-white text-[16px] w-[80%] font-Nunito">
              Trust our skilled professionals to deliver top-quality results,
              whether for large commercial projects or smaller residential ones.
            </p>
            <div className="flex justify-start gap-4 mt-3">
              <div>
                <p className="text-white text-[18px] font-medium font-Nunito">Follow Us</p>
              </div>
              <div className="flex justify-start gap-2">
                <img src={Facebook} alt="" className="cursor-pointer" />
                <img src={Linked} alt="" className="cursor-pointer" />
                <img src={Instagram} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[20px] font-bold font-Nunito">Quick Links</p>
            <ul className="text-white mt-4">
              <li className="hover:underline font-medium font-Nunito">
                <a href="/">Home</a>
              </li>
              <li className="mt-1 hover:underline font-medium font-Nunito">
                <a href="/about">About Us</a>
              </li>
              <li className="mt-1 hover:underline font-medium font-Nunito">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[20px] font-bold font-Nunito">Our Services</p>
            <ul className="text-white mt-4">
              <li className="hover:underline font-medium font-Nunito">
                <a href="/">Electrical Work</a>
              </li>
              <li className="mt-1 hover:underline font-medium font-Nunito">
                <a href="/">Control System</a>
              </li>
              <li className="mt-1 hover:underline font-medium font-Nunito">
                <a href="/">Fire Safety</a>
              </li>
              <li className="mt-1 hover:underline font-medium font-Nunito ">
                <a href="/">Meter Installation</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[20px] font-bold font-Nunito">Contact Us</p>
            <div className="flex justify-start gap-2 mt-4">
              <img src={Locate} alt="" className="w-[20px] h-[26px]" />
              <p className="text-white font-Nunito">LocationUSA</p>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Call} alt="" className="w-[20px] h-[20px]" />
              <p className="text-white font-Nunito">+1 646-552-4444</p>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Message} alt="" className="w-[24px] h-[19px]" />
              <p className="text-white font-Nunito">atozelectric@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* ..................... */}
      <div className="p-1">
        <p className="text-white text-[15px] text-center">
          Copyright © 2024 SM Electric Designed By{" "}
          <span className="cursor-pointer">
            <span className="text-[#02F002]">MF</span>{" "}
            <span className="text-[#FF6400]">Bzone</span>
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
