import Contimg from "../../public/png/contimg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactComp() {
  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        Aos.init({ duration: 2000, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard(); // Re-enable AOS on larger screens
      } else {
        Aos.init({ disable: true }); // Disable AOS on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center mt-8 p-3"
        style={{ backgroundImage: `url(${"/png/contactbg.png"})` }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 container mx-auto">
          <div className="self-center" data-aos="fade-right">
            <p className="text-[22px] font-Nunito font-bold text-white">
              Let’s Get{" "}
              <span className="text-customGreen-para font-extrabold">
                In Touch
              </span>
            </p>

            <div className="flex justify-start gap-4 mt-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-transparent border text-white w-[46%]"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="p-3 rounded-md bg-transparent border text-white w-[46%]"
              />
            </div>
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 rounded-md bg-transparent border text-white mt-4 w-[95%]"
            />

            <textarea
              className="textarea"
              id="comments"
              
              placeholder="Your Message..."
              rows="5"
              cols="63"
            >
              
            </textarea>

            <button className="mt-4">Submit</button>
          </div>

          <div className="mx-auto" data-aos="fade-left">
            <img src={Contimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComp;
