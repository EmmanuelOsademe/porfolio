import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputerCanvas } from "./canvas";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="w-full flex flex-col-reverse lg:flex-row md:justify-between md:items-start z-10">
          <div className="flex gap-4 items-start">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-56 h-40 violet-gradient" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className="text-[#915eff]">Emmanuel</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2`}>
                I develop full stack web applications,{" "}
                <br className="sm:block hidden" />
                user interfaces, and backend projects
              </p>
            </div>
          </div>
          <div className="flex flex-col max-lg:flex-row gap-2">
            <img
              src="/Profile.jpeg"
              alt="profile"
              className="w-40 h-40 rounded-full"
            />
            <div className="flex flex-col justify-center items-start sm:items-center">
              <div className="text-white text-base cursor-pointer hover:text-[#915eff] ">
                <a href="https://github.com/EmmanuelOsademe" target="_blank">
                  See Github Page
                </a>
              </div>
              <div className="text-white text-base cursor-pointer hover:text-[#915eff]">
                <a
                  href="https://www.linkedin.com/in/emmanuel-osademe/"
                  target="_blank"
                >
                  See LinkedIn Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
