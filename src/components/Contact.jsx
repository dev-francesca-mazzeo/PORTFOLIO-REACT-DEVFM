import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // For sending emails via EmailJS service
import { EarthCanvas } from "./canvas"; // 3D Earth animation component
import { SectionWrapper } from '../hoc'; // Higher Order Component for section styling/wrapping
import { styles } from '../styles'; // Styling constants
import { motion } from "framer-motion"; // For animation effects
import { slideIn } from "../utils/motion"; // Custom animation variant
import { useTranslation } from 'react-i18next'; // i18n for translations

const ContactForm = () => {
  const { t } = useTranslation(); // Hook to access translation function

  // State hooks to store form inputs and loading state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading state

    // EmailJS service credentials
    const serviceID = 'service_gt7kr0m';
    const templateID = 'template_lhroeqv';
    const userID = 'FzYFWzXVATd0A9iRA';

    // Data to send via email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS SDK
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setLoading(false); // Turn off loading
        console.log('Email sent!', response.status, response.text);
        // Clear form inputs after successful send
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setLoading(false); // Turn off loading on error as well
        console.error('Email error:', error);
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left side: Contact form with slide-in animation from the left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* Subtitle and title with translated texts */}
        <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.nameLabel')}</span>
            <input
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          {/* Email input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.emailLabel')}</span>
            <input
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Message textarea */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.messageLabel')}</span>
            <textarea
              rows={7}
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          {/* Submit button with loading state text */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </motion.div>

      {/* Right side: 3D Earth canvas with slide-in animation from the right */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Export the component wrapped by SectionWrapper HOC for consistent layout/styling
export default SectionWrapper(ContactForm, "contact");
