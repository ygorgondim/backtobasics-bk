import imgMockup from "../assets/imgMockup.png";
import btbLogo from "../assets/BTB__logo.svg";

import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <>
      <div className="p-2 bg-red-600 text-white font-fontPrentonRP font-bold text-center">
        <div className="w-full flex flex-row">
          <Marquee
            pauseOnHover={false}
            autoFill
            speed={50}
            direction="left" // right || left || up || down
            // delay={5} // delay in seconds to start the animation
          >
            <p className="px-1 text-nowrap">
              ESTA OFERTA ENCERRA EM BREVE! 💥
            </p>
          </Marquee>
        </div>
      </div>
        <div className="flex md:flex-col lg:flex-row items-center bg-[url('./assets/bg-01.png')] bg-center bg-cover lg:p-20">
          <div
          className="flex-1"
            data-aos="fade-up"
            data-aos-offset="600"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col gap-4 lg:gap-12 items-center lg:items-start font-fontHenrietteC text-white">
              <img src={btbLogo} className="w-72 mt-10" />
              <img
                src={imgMockup}
                className="flex lg:hidden w-full"
              />
              <div className="lg:pl-3 max-w-sm md:max-w-xl font-bold text-[#F5EED8] text-center lg:text-left text-4xl lg:text-5xl">
                <span className="text-wrap">
                  Uma formação de 30 dias para católicos que{" "}
                  <span className="italic">
                  desejam viver a sua fé com mais maturidade, simplicidade e bom
                  senso.
                </span>
                </span>
              </div>
              <a
                href="#"
                className="flex justify-center text-center lg:text-left text-pretty mb-14 font-fontPrentonRP leading-5  w-[90%] px-14 md:px-3 py-4 rounded-lg bg-gradient-to-b md:bg-gradient-to-r from-[#9748FF] to-[#9748FF]/50 md:from-[#9748FF] md:to-[#9748FF]/0 hover:bg-[#9748FF] transition-colors duration-300"
              >
                <p>
                  <span>Insira seus dados abaixo e </span>
                  <span className="font-semibold">
                    {" "}
                    garanta o desconto exclusivo{" "}
                    <i className="uil uil-arrow-down"></i>
                  </span>
                  
                </p>
              </a>
            </div>
          </div>

          <div className="hidden lg:inline flex-1" id="img-grande">
            <img src={imgMockup} className="min-w-[572px]" />
          </div>
        </div>
    </>
  );
};

export default HeroSection;
