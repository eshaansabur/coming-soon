import React from 'react';
//motion
import {motion} from 'framer-motion';
//vaiants
import {fadeIn} from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section mb-48' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />Together</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className='flex-1 items-start' action="">
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='Your Name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='Your Email'/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
        </motion.form>

      </div>
    </div>
  </section>;
};

export default Contact;
