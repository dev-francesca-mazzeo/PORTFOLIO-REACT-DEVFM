import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
} from 'react-icons/fa';  // Import social media icons from react-icons
import { useTranslation } from 'react-i18next';  // Hook for translations

const Footer = () => {
  const { t } = useTranslation();  // Translation function

  return (
    // Footer container with background color from Tailwind class 'bg-primary'
    <footer className="bg-primary">
      {/* Main footer content area with padding and responsive flex layout */}
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        {/* Copyright and developer link */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a
            href="https://www.linkedin.com/in/francesca-mazzeo-62232123b/"
            className="hover:underline"
          >
            Dev. Francesca Mazzeo
          </a>{' '}
          {/* Translated string for additional rights info */}
          {t('footer.rights')}
        </span>

        {/* Social media links list */}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* Each anchor wraps an icon with hover color change */}
          <a href="https://www.facebook.com/profile.php?id=100023753100171" className="mr-4 hover:text-blue-600">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com/DevFrancescaM/" className="mr-4 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/francesca_mazzeo_/" className="mr-4 hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/francesca-mazzeo-62232123b/" className="mr-4 hover:text-blue-500">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/dev-francesca-mazzeo" className="mr-4 hover:text-gray-500">
            <FaGithub size={20} />
          </a>
          <a href="https://t.me/FrancescaMazzeo" className="mr-4 hover:text-blue-500">
            <FaTelegram size={20} />
          </a>
        </ul>
      </div>

      {/* Footer bottom area with privacy policy text */}
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        {/* Privacy policy text, translated */}
        <span className="text-sm text-[10px] text-gray-500 sm:text-center dark:text-gray-400">
          {t('footer.privacy')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
