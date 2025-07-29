import React from "react";
import { motion } from "framer-motion";  // For animation effects
import Typewriter from 'typewriter-effect';  // For typing text animation

import { styles } from "../styles";  // Import custom styles
import { ComputersCanvas } from "./canvas";  // 3D canvas component
import { useTranslation } from "react-i18next";  // Translation hook

const Hero = () => {
  const { t, i18n } = useTranslation();  // Translation function and instance

  // Array of strings for typewriter animation, translated dynamically
  const typewriterStrings = [
    t('hero.typewriter1'),
    t('hero.typewriter2'),
    t('hero.typewriter3'),
  ];

  return (
    // Main hero section: full viewport height and relative positioning
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Container for hero content, absolutely positioned with padding and flex layout */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left vertical line with circle (decorative element) */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> {/* Colored circle */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> {/* Vertical gradient line */}
        </div>

        {/* Main text content */}
        <div>
          {/* Large heading with translated greeting and highlighted name */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t('hero.greeting')} <span className='text-[#915EFF]'>Francesca</span><br className='sm:block hidden' />
          </h1>

          {/* Subheading with animated typewriter effect */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: typewriterStrings,  // Array of strings to type out
                autoStart: true,              // Start animation automatically
                loop: true,                   // Loop animation infinitely
                deleteSpeed: 10,              // Speed of deleting characters
                cursor: '<',                  // Custom cursor character
                delay: 100,                   // Delay between typing each character
              }}
            />
          </p>
        </div>
      </div>

      {/* 3D animated canvas component rendered behind the hero content */}
      <ComputersCanvas />

      {/* Scroll indicator at the bottom center, linking to #about section */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          {/* Mouse-shaped container with animated dot */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}  // Up and down animation
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'  // Small animated circle
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
