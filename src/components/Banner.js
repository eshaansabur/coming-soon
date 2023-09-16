import React from 'react';
import Image from '../assets/eshaan2.jpg';
import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Banner = () => {
  return <section className='min-h-[85vh] lg:mimin-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center md:items-center lg:gap-x-12'>
        {/* Text */}
        <div className='flex-auto text-center font-secondary lg:text-left'>
          <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='text-[25px] lg:text-[55px] font-bold leading-[0.8]'>Hi, I am Eshaan</motion.h1>
          <div className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I work in </span>
            <TypeAnimation sequence={[
              'Front End Developement',
              2000,
              'CMS Customization',
              2000,
              'Full Stack Web Development',
              2000,

            ]} speed={70} className='text-accent'wrapper='span' repeat={Infinity}></TypeAnimation>
          </div>
          <div>
          <motion.p
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur voluptas neque debitis impedit, velit excepturi molestiae, doloribus iure voluptates fugit quibusdam tempora fuga ullam commodi dolore! Porro voluptate consequatur doloribus magnam explicabo quae voluptatum dignissimos ratione amet possimus eveniet eum harum, error, quidem enim! Eveniet laboriosam fugiat eum at sit dolores doloribus itaque nam. Adipisci eum facilis quibusdam dolorem nobis doloremque iure harum, hic, non fugiat molestiae commodi reiciendis eveniet quo enim obcaecati repudiandae quia illo, modi corporis aliquam? Enim, ea nesciunt, aut mollitia autem quisquam natus quibusdam ad molestiae obcaecati quae officiis ipsa quis cumque itaque eius repudiandae.</motion.p>
          <motion.button
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='btn btn-lg mb-12'>Contact Me</motion.button>
          </div>
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://www.facebook.com/eshaan.tanzim/"><FaFacebook></FaFacebook></a>
            <a href="https://github.com/eshaansabur"><FaGithub></FaGithub></a>
            <a href="https://www.linkedin.com/in/eshaan-tanzim-sabur-198309224/"><FaLinkedin></FaLinkedin></a>
          </motion.div>
        </div>
        {/* Image */}
        <div className=''>
          <img className='hidden md:flex lg:flex w-96' src={Image} alt="" /></div>
      </div>
    </div>
    </section>;
};

export default Banner;
