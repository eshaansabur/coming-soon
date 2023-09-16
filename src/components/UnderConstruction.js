import React from 'react';
import {BsCalendar2, BsCalendar2DateFill} from "react-icons/bs"
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
const UnderConstruction = () => {
    const [ref, inView]= useInView({
        threshold: 0.5
      });
    return (
        <section className='section bg-site py-8'>
            <div className="container mx-auto">
            <div className='flex justify-between items-center'>
            <a href="">
                <h3 className='text-4xl text-white font-bold'>Eshaan Tanzim Sabur</h3>
            </a>
      </div>
            <motion.h3
            variants={fadeIn('top', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='h2 text-white'>Portfolio Website Coming Soon</motion.h3>
            <BsCalendar2DateFill 
            className='text-4xl mb-4'></BsCalendar2DateFill>
            <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='text-[40px] font-tertiary text-gradient mb-8'>
                <CountUp className='mt-8' start={53} end={31} duration={7}></CountUp>
                Days Remaining
              </motion.div>
            </div>
        </section>
    );
};

export default UnderConstruction;