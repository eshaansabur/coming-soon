import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';

//services data
const services =[
  {
    name: "Programming Languages",
    description: "Javascript (proficient), Java(prior experience), Python(prior experience)",
    link: "Learn More"
  },
  {
    name: "Full Stack Web Development",
    description: "HTML, CSS, React JS, Node JS, Express JS, Typescript, Firebase, MongoDB (prior experience), MySQL(prior experience, Wordpress, Shopify",
    link: "Learn More"
  },
  {
    name: "Others",
    description: "Github actions, Firebase, Windows(Operating System), REST(API and Protocol)",
    link: "Learn More"
  }
]
const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}} 
      className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>My Skills</h2>
        <h3 className='h3 max-w-[455px] mb-16'>I am a self motivated learner looking for an environment to work in the tech field</h3>
        <button className='btn btn-sm'>Contact Me</button>
      </motion.div>
      
      
      {/* services */}
      <motion.div 
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='flex-1'>
        {/* services list */}
        <div>
        {services.map((service, index)=>{
          //destructure service
          const {name, description, link} = service;
          return (
            <div className='border-b border-white/20 h-[180px] mb-[28px] flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight mb-4'>{description}</p>
              </div>
              {/* links */}
              {/* <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight></BsArrowUpRight></a>
                <a href="#" className='text-gradient text-sm'>{link}</a>
              </div> */}
            </div>
          )
        })}
        </div>
      </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
