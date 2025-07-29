import React, { useState } from "react";
import { motion } from "framer-motion";  // For animation effects
import { useTranslation } from "react-i18next";  // For multilingual support

import { styles } from "../styles";  // Custom styles object
import SectionWrapper from "../hoc/SectionWrapper";  // Higher-order component for section styling/wrapping
import { fadeIn, textVariant } from "../utils/motion";  // Animation variants
import { testimonials } from "../constants";  // Array of testimonial data
import FeedbackForm from './FeedbackForm';  // Feedback form component

// Single testimonial card component
const FeedbackCard = ({
  index,        // Index for animation delay
  testimonial,  // The testimonial text
  name,         // Name of the person giving the testimonial
  designation,  // Their job title or role
  company,      // Company they work for
  image,        // URL of their profile image
}) => (
  <motion.div
    // Animate card with fadeIn effect, staggered based on index
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* Large opening quote mark */}
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      {/* Testimonial content */}
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      {/* Author info: name, designation, company, and avatar */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {/* Blue @ symbol before name */}
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {/* Display designation and company in Italian "presso" means "at" */}
            {designation} presso {company}
          </p>
        </div>

        {/* Profile image */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

// Main Feedbacks component rendering the section with testimonials and feedback form
const Feedbacks = () => {
  // State for showing feedback form if needed (currently unused)
  const [showFeedbackForm] = useState(false);
  const { t } = useTranslation();  // Translation function

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      {/* Header area with title, subtitle and feedback form */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          {/* Section subtitle */}
          <p className={styles.sectionSubText}>{t("testimonials.subtitle")}</p>
          {/* Section title */}
          <h2 className={styles.sectionHeadText}>{t("testimonials.title")}</h2>
          {/* Include feedback submission form */}
          <FeedbackForm />
        </motion.div>
      </div>

      {/* Testimonials list area with cards, slightly overlapping the header above */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Map over testimonial data and render each testimonial card */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// Wrap the component with SectionWrapper HOC to apply additional styling or functionality
export default SectionWrapper(Feedbacks, "");
