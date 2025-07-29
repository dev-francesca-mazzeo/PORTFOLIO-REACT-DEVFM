import React from "react";
import { Tilt } from "react-tilt"; // Provides 3D tilt effect on cards
import { motion } from "framer-motion"; // Animations library
import { useTranslation } from "react-i18next"; // For localization / translations

import { styles } from "../styles"; // Custom CSS styles
import { github } from "../assets"; // GitHub icon asset
import SectionWrapper from "../hoc/SectionWrapper"; // Higher order component for section styling and animations
import { fadeIn, textVariant } from "../utils/motion"; // Animation variants

import { projects } from "../constants"; // Original projects data with images and links

// Card component for displaying a single project with tilt and animation effects
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Animate the card with fadeIn from bottom with stagger based on index
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,     // Max tilt rotation in degrees
          scale: 1,    // No zoom on tilt
          speed: 450,  // Tilt animation speed
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image container */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay with GitHub icon that links to source code */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Open source code link in new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Project title and description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags displayed below the description */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag
              className={`text-[14px] ${tag.color}`} // Apply color class from tag
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Main component to render all projects section
const Works = () => {
  const { t } = useTranslation(); // Get translation function from i18next

  // Retrieve the translated projects data (name, description, tags) as an array of objects
  // Using returnObjects:true to get nested objects instead of a string
  const translatedProjects = t("projects.cards", { returnObjects: true });

  return (
    <>
      {/* Animated section header: subtitle and main title */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          {t("projects.sectionSubText")}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("projects.sectionHeadText")}
        </h2>
      </motion.div>

      {/* Section description with fade-in animation */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("projects.description")}
        </motion.p>
      </div>

      {/* Container for project cards with spacing and wrapping */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* Loop over translated projects to render each ProjectCard */}
        {translatedProjects.map((projTranslated, index) => {
          // Get image and source code link from original projects array
          // This keeps the image/link consistent and translations only affect text
          const { image, source_code_link } = projects[index] || {};

          return (
            <ProjectCard
              key={`project-${index}`} // Unique key for React list
              index={index}             // Used to stagger animation delay
              name={projTranslated.name} // Translated project name
              description={projTranslated.description} // Translated description
              tags={projTranslated.tags}  // Translated tags array
              image={image}               // Image URL from constants
              source_code_link={source_code_link} // Source code link from constants
            />
          );
        })}
      </div>
    </>
  );
};

// Export the Works component wrapped in SectionWrapper HOC with no specific id passed
export default SectionWrapper(Works, "");
