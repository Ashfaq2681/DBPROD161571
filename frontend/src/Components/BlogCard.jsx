import { memo } from "react"

const BlogCard = ({ src, number, title, subtitle }) => {
  
  return (
    <div className='flex flex-col items-start lg:w-[33%] w-full'>
      {src !== "" &&<img loading="lazy" src={src} alt={number} className='w-[471px] h-[300px] object-cover'/> }
        <p className='text-[30px] text-center font-bold text-white bg-[#3b82f6] w-[60px] h-[48px] -mt-20 md:-mt-12 mb-5'>{number}</p>
        <p className='text-2xl font-bold mr-0 lg:mr-10 my-5'>{title}</p>
        <p className='text-lg font-light leading-tight mr-0 lg:mr-10 xl:mr-26'>{subtitle}</p>
    </div>
  )
}

export default memo(BlogCard)