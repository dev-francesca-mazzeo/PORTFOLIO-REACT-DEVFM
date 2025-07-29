import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from "../utils/motion";

// Higher-Order Component (HOC) to wrap sections with animation and layout
// Takes a React component (Component) and an id name (idName) for the section
const SectionWrapper = (Component, idName) => function HOC() {
  return (
    // motion.section is an animated <section> element from framer-motion
    <motion.section
      variants={staggerContainer()}       // Animation variants for staggering children animations
      initial='hidden'                    // Initial animation state: hidden
      whileInView='show'                  // Animate to 'show' state when section is in viewport
      viewport={{ once: true, amount: 0.25 }} // Trigger animation once, when 25% visible
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Styling and layout classes
    >
      {/* Invisible anchor span to link to this section via id */}
      <span className='hash-span' id={idName}>
        &nbsp; {/* non-breaking space to ensure span has height */}
      </span>

      {/* Render the wrapped component inside the animated section */}
      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
