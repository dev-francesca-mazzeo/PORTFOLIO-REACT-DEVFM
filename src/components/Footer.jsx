import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  java,
  threejs,
  mysql,
  rampone,
  php,
  C,
  Cpp,
  BT,
  springboot,
  reactsite,

} from "../assets";

const Footer = () => {
  return (

    <footer className="bg-primary ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/francesca-mazzeo-62232123b/" className="hover:underline">Dev. Francesca Mazzeo</a>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
          </ul>
        </div>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span  className="text-sm text-[10px] text-gray-500 sm:text-center dark:text-gray-400">I authorize the processing of personal data contained in my curriculum vitae on the basis of Legislative Decree 196 of 30 June 2003 and art. 13 of the GDPR.</span>
        </div>

    </footer>

  );
}

export default Footer;