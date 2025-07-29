import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

import { experiences } from "../constants"; // Import data from constants.js

// Component to render each experience card on the timeline
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg || "#232631" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* Render the company icon if available */}
        {experience.icon && (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        )}
      </div>
    }
  >
    <div>
      {/* Experience title */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      {/* Company name */}
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    {/* List of key points for this experience */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t } = useTranslation();

  // Here we assume that the translated texts (title, company_name, points)
  // will replace the static ones in the constants for localization.
  // For each experience, we overwrite texts with translations from i18next.
  // If you don’t have translations, you can use constants directly.

  // Get the translated list (only texts) from i18n with the same structure as experiences
  const translatedExperiences = t("experiences", { returnObjects: true });

  // Merge translated texts with images/static data from constants:
  const mergedExperiences = experiences.map((exp, i) => ({
    ...exp,
    ...translatedExperiences[i], // overwrite texts with translations
  }));

  return (
    <>
      {/* Animated section title and subtitle */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("experience.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("experience.title")}</h2>
      </motion.div>

      {/* Timeline container */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* Render each experience card */}
          {mergedExperiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap the Experience component with SectionWrapper HOC and export
export default SectionWrapper(Experience, "work");
