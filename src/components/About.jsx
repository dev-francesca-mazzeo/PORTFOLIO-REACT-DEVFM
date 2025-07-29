import React from "react";
import { Tilt } from "react-tilt"; // For 3D tilt effect on cards
import { motion } from "framer-motion"; // For animation effects

import { useTranslation } from "react-i18next"; // For internationalization (i18n)

import { styles } from "../styles"; // Importing custom CSS styles
import { services } from "../constants"; // List of services with icons and IDs
import SectionWrapper from "../hoc/SectionWrapper"; // Higher order component for section styling and animation
import { fadeIn, textVariant } from "../utils/motion"; // Animation variants for framer-motion

// ServiceCard component: displays a single service with a tilt effect and animation
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      // Animate each card with staggered fade-in from the right using spring animation
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Show icon if exists, otherwise show a placeholder */}
        {icon ? (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        ) : (
          <div className="w-16 h-16 bg-gray-500 rounded-md flex items-center justify-center text-white">
            N/A
          </div>
        )}

        {/* Service title */}
        <h3 className="text-white text-[20px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About component: section introducing the services with animated heading and description
const About = () => {
  const { t } = useTranslation(); // Hook to get translated strings

  return (
    <>
      {/* Animated section header: subtitle and title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("about.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
      </motion.div>

      {/* Animated paragraph with description, supporting multi-line text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("about.description")}
      </motion.p>

      {/* Container for all service cards, spaced with flexbox */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id} // Unique key for each service
            index={index}    // Index to stagger animation timing
            title={t(`about.services.${service.id}`)} // Localized service title
            icon={service.icon} // Icon image path
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); // Export wrapped About section with "about" id
