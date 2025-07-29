import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { Popup } from 'reactjs-popup';
import { styles } from '../styles';
import { useTranslation } from 'react-i18next';

const FeedbackForm = () => {
  // Hook for translation
  const { t } = useTranslation();
  
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false); // Loading state to indicate form submission progress
  const [showPopup, setShowPopup] = useState(false); // Controls visibility of the popup form

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Start loading indicator

    // EmailJS service/template/user IDs
    const serviceID = 'service_gt7kr0m';
    const templateID = 'template_5i62m2l';
    const userID = 'oBnlKagNdDIve9ww8';

    // Template parameters to send via email
    const templateParams = {
      from_name: name,
      from_email: email,
      testimonial: testimonial,
      designation: designation,
      company: company,
    };

    try {
      // Send email via EmailJS
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully:', response.text);

      // Reset loading and form fields after successful send
      setLoading(false);
      setName('');
      setEmail('');
      setTestimonial('');
      setDesignation('');
      setCompany('');
      setShowPopup(false); // Close popup
    } catch (error) {
      // Handle any errors during email sending
      console.error('Error sending email:', error);
      setLoading(false); // Stop loading even if there is an error
    }
  };

  return (
    <div className='mb-10'>
      {/* Text with button to open the popup form */}
      <p className={styles.sectionSubText}>
        {t("feedbackForm.triggerText")}{' '}
        <input
          className='text-[#915EFF]'
          type='button'
          value={t("feedbackForm.triggerButton")}
          onClick={() => setShowPopup(true)} // Show popup on click
        />
      </p>

      {/* Popup component for feedback form */}
      <Popup open={showPopup} onClose={() => setShowPopup(false)} className='bg-black-100'>
        <motion.div
          variants={slideIn('', '', 6, 1)} // Animation effect on popup open
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-y-scroll max-h-[80vh] outline-none'
        >
          {/* Subtitle and title of the form */}
          <p className={styles.sectionSubText}>{t("feedbackForm.formSubtitle")}</p>
          <h3 className={styles.sectionHeadText}>{t("feedbackForm.formTitle")}</h3>

          {/* Form for user feedback */}
          <form onSubmit={handleSubmit} className='mt-12 flex-col gap-8'>
            {/* Grid layout for first four inputs */}
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              {/* Company input */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{t("feedbackForm.fields.company")}</span>
                <input
                  type='text'
                  name='company'
                  placeholder={t("feedbackForm.fields.companyPlaceholder")}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </label>

              {/* Email input */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{t("feedbackForm.fields.email")}</span>
                <input
                  name='email'
                  placeholder={t("feedbackForm.fields.emailPlaceholder")}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              {/* Name input */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{t("feedbackForm.fields.name")}</span>
                <input
                  type='text'
                  name='name'
                  placeholder={t("feedbackForm.fields.namePlaceholder")}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              {/* Designation input */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{t("feedbackForm.fields.designation")}</span>
                <input
                  type='text'
                  name='designation'
                  placeholder={t("feedbackForm.fields.designationPlaceholder")}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </label>
            </div>

            {/* Testimonial textarea */}
            <label className='flex flex-col mt-8'>
              <span className='text-white font-medium mb-4'>{t("feedbackForm.fields.testimonial")}</span>
              <textarea
                rows={7}
                name='testimonial'
                placeholder={t("feedbackForm.fields.testimonialPlaceholder")}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                required
              />
            </label>

            {/* Submit button */}
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-8'
            >
              {/* Show loading text while sending, otherwise show "Send" */}
              {loading ? t("feedbackForm.sendingButton") : t("feedbackForm.sendButton")}
            </button>
          </form>
        </motion.div>
      </Popup>
    </div>
  );
};

export default FeedbackForm;
