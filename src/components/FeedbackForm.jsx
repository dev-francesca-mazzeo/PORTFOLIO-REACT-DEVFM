import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { Popup } from 'reactjs-popup';
import { styles } from '../styles';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

   // EmailJS configuration
    const serviceID = 'service_gt7kr0m';
    const templateID = 'template_5i62m2l';
    const userID = 'oBnlKagNdDIve9ww8';

  const templateParams = {
    from_name: name,
    from_email: email,
    testimonial: testimonial,
    designation: designation,
    company: company,
  };

  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('Email sent successfully:', response.text);


    setLoading(false);
    // Reset form fields
    setName('');
    setEmail('');
    setTestimonial('');
    setDesignation('');
    setCompany('');
    setShowPopup(false);
  } catch (error) {
    console.error('Error sending email:', error);
    setLoading(false);
  }
};


  return (
    <div className='mb-10'>
      <p className={styles.sectionSubText}>
        leave a testimony{' '}
        <input
          className='text-[#915EFF]'
          type='button'
          value='CLICK HERE'
          onClick={() => setShowPopup(true)}
        />
      </p>

      <Popup open={showPopup} onClose={() => setShowPopup(false)} className='bg-black-100'>
        <motion.div
          variants={slideIn('', '', 6, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-y-scroll max-h-[80vh] outline-none'
        >
          <p className={styles.sectionSubText}>Write one</p>
          <h3 className={styles.sectionHeadText}>Testimony.</h3>

          <form onSubmit={handleSubmit} className='mt-12 flex-col gap-8'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Company</span>
                <input
                  type='text'
                  name='company'
                  placeholder="What's Company's name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input
                  name='email'
                  placeholder="What's your web address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  placeholder="What's your name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Designation</span>
                <input
                  type='text'
                  name='designation'
                  placeholder='What is your designation?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </label>
            </div>
            <label className='flex flex-col mt-8'>
              <span className='text-white font-medium mb-4'>Your testimonial</span>
              <textarea
                rows={7}
                name='testimonial'
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                required
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-8'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </Popup>
    </div>
  );
};

export default FeedbackForm;
