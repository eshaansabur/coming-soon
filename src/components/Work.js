import React from 'react';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
//img
import Img1 from '../assets/Capture0.PNG';
import Img2 from '../assets/Capture1.PNG';
import Img3 from '../assets/Capture2.PNG';
import Img4 from '../assets/Capture3.PNG';
import Img5 from '../assets/Capture4.PNG';
import Img6 from '../assets/Capture5.PNG';
import Img7 from '../assets/Capture6.PNG';
import Img8 from '../assets/Capture7.PNG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const works= [
  {
    id: 1,
    img: Img1,
    pretitle: "George Wordlaw",
    title: "Wordpress Customization",
    link: "https://georgewordlaw.org/"
  },
  {
    id: 2,
    img: Img2,
    pretitle: "XYZ Animation Studios",
    title: "Wordpress Customization",
    link: "https://xyzanimationstudios.com/"
  },
  {
    id: 3,
    img: Img3,
    pretitle: "XYZ Animation School",
    title: "Wordpress Customization",
    link: "https://xyzanimationstudios.com/learn"
  },
  {
    id: 4,
    img: Img4,
    pretitle: "Chris Gin Photography",
    title: "Wordpress Customization",
    link: "https://chrisgin.com/"
  },
  {
    id: 5,
    img: Img5,
    pretitle: "Shifa USA Houston",
    title: "Frontend Development",
    link: "https://www.shifausahouston.org/"
  },
  {
    id: 6,
    img: Img6,
    pretitle: "Warehouse Website",
    title: "Fullstack Development",
    link: "https://bs-warehouse-management-system.web.app/",
  },
  {
    id: 7,
    img: Img7,
    pretitle: "Demo Photography with React",
    title: "Fronend with React",
    link: "https://et-photography.firebaseapp.com/"
  },
  {
    id: 8,
    img: Img8,
    pretitle: "Camperville",
    title: "Shopify Customization",
    link: "https://www.camperville.store/"
  }

]
const Work = () => {
  return <section className='section mb-40 mt-12' id='work'>
    <div className="container mx-auto">
      <motion.h2
      variants={fadeIn('right', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}} 
      className='text-[40px] lg:text-[70px] mb-16'>
        My <span className='text-accent'>Latest</span> Works
      </motion.h2>
      <div>
        <div className='grid grid-cols-3 gap-4 gap-y-12 mb-10 lg:mb-0'>
          {/* image */}
          {
            works.map(work=>{
              return <Link to={work.link}>
              <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              key={work.id} work={work} className='cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* image */}
                <img className='group-hover:scale-125 transition-all duration-500' src={work?.img} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>{work?.pretitle}</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>{work?.title}</span>
                </div>
              </motion.div>
              </Link>
            })
          }
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
