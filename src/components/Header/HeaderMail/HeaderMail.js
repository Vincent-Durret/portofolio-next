import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.9,
    },
  },
};

const HeaderMail = () => {
  return (
    <motion.div
      variants={boxVariants}
      initial={"hidden"}
      animate={"visible"}
      className='fixed bottom-0 right-12 z-30 hidden md:block'
    >
      <div className='rounded-t-lg bg-white/20  backdrop-blur-lg '>
        <div className='flex flex-col items-center justify-center  space-y-6 px-2 pt-4  '>
          <div className=''>
            <Link
              href='https://www.facebook.com'
              className=' text-base text-white transition-all duration-300 [writing-mode:vertical-lr] hover:-translate-y-1'
            >
              vincent.durret@gmail.com
            </Link>
          </div>

          <div className='relative h-24 w-px bg-white'>
            <div className='absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-white'></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderMail;