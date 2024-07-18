import FootLogo from "../../public/png/footLogo.png";
import Facebook from "../../public/png/Facebook.png";
import Linked from "../../public/png/Linked.png";
import Instagram from "../../public/png/instagram.png";
import Locate from "../../public/png/locate.png";
import Call from "../../public/png/call.png";
import Message from "../../public/png/message.png";

function Footer() {
  return (
    <>
      <div className="text-gradient max-w-full">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 container mx-auto gap-2 p-4  ">
          <div className="col-span-2 mx-auto">
            <img src={FootLogo} alt="" className="w-[40%]" />
            <p className="text-white text-[16px] w-[80%]">
              Trust our skilled professionals to deliver top-quality results,
              whether for large commercial projects or smaller residential ones.
            </p>
            <div className="flex justify-start gap-4 mt-3">
              <div>
                <p className="text-white text-[18px] font-medium">Follow Us</p>
              </div>
              <div className="flex justify-start gap-2">
                <img src={Facebook} alt="" className="cursor-pointer" />
                <img src={Linked} alt="" className="cursor-pointer" />
                <img src={Instagram} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[18px] font-semibold">Quick Links</p>
            <ul className="text-white mt-4 ">
              <li className="hover:underline">
                <a href="/about">Home</a>
              </li>
              <li className="mt-1 hover:underline">
                <a href="/services">About Us</a>
              </li>
              <li className="mt-1 hover:underline">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[18px] font-semibold">Our Services</p>
            <ul className="text-white mt-4 ">
              <li className="hover:underline">
                <a href="/about">Electrical Work</a>
              </li>
              <li className="mt-1 hover:underline">
                <a href="/services">Control System</a>
              </li>
              <li className="mt-1 hover:underline">
                <a href="/contact">Fire Safety</a>
              </li>
              <li className="mt-1 hover:underline">
                <a href="/contact">Meter Installation</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-6">
            <p className="text-white text-[18px] font-semibold">Contact Us</p>
            <div className="flex justify-start gap-2 mt-4">
              <img src={Locate} alt="" className="w-[20px] h-[26px]" />
              <p className="text-white">LocationUSA</p>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Call} alt="" className="w-[23px] h-[26px]" />
              <p className="text-white">+1 646-552-4444</p>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <img src={Message} alt="" className="w-[26px] h-[20px]" />
              <p className="text-white">atozelectric@gmail.com</p>
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
