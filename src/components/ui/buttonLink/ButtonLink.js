import Link from "next/link";
import React from "react";

const ButtonLink = (props) => {
  return (
    <Link
      href={props.href}
      className='group relative mb-4 inline-block overflow-hidden rounded border border-white/40  px-12 py-3 text-p font-medium text-white hover:text-white/40 focus:outline-none focus:ring active:bg-my-color active:text-white'
    >
      <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-300 group-hover:w-full'></span>
      <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-300 group-hover:h-full'></span>
      <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full'></span>
      <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-300 group-hover:h-full'></span>
      {props.children}
    </Link>
  );
};

export default ButtonLink;
