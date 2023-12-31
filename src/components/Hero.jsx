import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";

import { Socials } from "../components";
import { ProfileCanvas } from "../components";

const Hero = () => {
  const isMobile = useMobileDetect();
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#40E0D0]' />
          <div className='w-1 sm:h-80 h-40 turquoise-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span>Kelan ✌️</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer <br className='sm:block hidden' />
            Passionate about AI/ML
          </p>
        </div>
        {!isMobile && <ProfileCanvas/>}
      </div>
      <div style={{ paddingLeft: "75px", paddingTop: "275px" }}>
        <Socials />
      </div>
    </section>
  );
};

function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
}

export default Hero;