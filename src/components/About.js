import React from 'react';

//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
const About = () => {
  const [ref, inView]= useInView({
    threshold: 0.5
  });
  return <section className='section mt-2' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
        {/* image */}
        <div className='flex-auto bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'></div>
        {/* text */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        >
          <h2 className='h2 text-accent'>About Me</h2>
          {/* <h3 className='h3 mb-4'>I am a motivated self learner</h3> */}
          <p className='mb-6'>I have completed my undergraduate education from a reputed university in Dhaka, Bangladesh with a Bachelors degree in Computer Science at BRAC University. I have done minor in Bachelors of Business Administration. I completed my HSC from St. Joseph Higher Secondary School.</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView? <CountUp start={0} end={2} duration={3}></CountUp> : null}
              </div>
              <div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView? <CountUp start={0} end={30} duration={3}></CountUp> : null}
              </div>
              <div>
                <div className="font-primary text-sm tracking-[2px]">
                  + Projects<br />
                  Completed
                </div>
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView? <CountUp start={0} end={21} duration={3}></CountUp> : null}
              </div>
              <div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
