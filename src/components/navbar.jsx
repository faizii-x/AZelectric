import Logo from "../../public/png/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";
// import Example from "./example";
// import "flowbite";
// import Modal from "./modal";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [clickForm, setClickForm] = useState(false);
  const handleClick = () => setClickForm(false);

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed max-w-full container z-20 mx-auto shadow-lg navbarr ${isScrolled ? 'scrolled' : ''}`}>
        <div className="">
          <div className="flex justify-between mt-1">
            <Link to="/">
              <img
                className="cursor-pointer mx-auto w-[100%] h-[70px] "
                src={Logo}
                alt=""
              />
            </Link>

            <div className="class-hide-nav">
              <div className="flex justify-center gap-6 mt-3 ">
                <Link to="/">
                  <h2 className="btn font-semibold">
                    {pathname === "/" ? (
                      <div className=" text-customGreen-light">Home</div>
                    ) : (
                      "Home"
                    )}
                  </h2>
                </Link>

                <Link to="/service/">
                  <div className="flex justify-start gap-1">
                    <h2 className="font-semibold btn">
                      {pathname === "/service/" ? (
                        <div className="text-customGreen-light">Services</div>
                      ) : (
                        "Services"
                      )}
                    </h2>
                  </div>
                </Link>


                <Link to="/about/">
                  <div className="flex justify-start gap-1">
                    <h2 className=" btn font-semibold">
                      {pathname === "/about/" ? (
                        <div className="text-customGreen-light">About Us</div>
                      ) : (
                        "About Us"
                      )}
                    </h2>
                  </div>
                </Link>

               

                <Link to="/contact/">
                  <h2 className="btn font-semibold ">
                    {pathname === "/contact/" ? (
                      <div className="text-customGreen-light"> Contact Us</div>
                    ) : (
                      " Contact Us"
                    )}
                  </h2>
                </Link>
              </div>
            </div>
            <div className="hidden md:block self-center">
              <div
                //    onClick={() => setClickForm(true)}
                // className="button-gradient text-white rounded-lg font-medium w-[150px] font-san p-3 self-center flex justify-center items-center cursor-pointer hover:zoom-in"
             className="button"
             >
                <button className="">Get Service</button>
              </div>
            </div>

            {/* {clickForm && <Modal handleClick={handleClick} />} */}

            <div className="flex md:hidden justify-end mt-5">
              <input
                 
                type="checkbox"
                id="checkbox"
              />
              <label onClick={() => setOpen(true)} className="toggle">
                {/* <div className="bars" id="bar1"></div> */}
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
          </div>

          <Example open={open} setOpen={handleOnClose} />
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
