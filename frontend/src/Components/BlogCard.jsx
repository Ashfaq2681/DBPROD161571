import { memo } from "react"

const BlogCard = ({ src, number, title, subtitle }) => {
  return (
    <div className='flex flex-col items-start w-full lg:w-[471px]'>
        <img loading="lazy" src={src} alt={number} className='w-[471px] h-[516px] object-cover'/>
        <p className='text-[70px] text-center font-bold text-white bg-[#4A16D8] w-[96px] h-[96px] -mt-20 md:-mt-12 mb-5'>{number}</p>
        <p className='text-[40px] font-bold mr-0 lg:mr-10 my-5'>{title}</p>
        <p className='text-[24px] font-light leading-tight mr-0 lg:mr-10 xl:mr-26'>{subtitle}</p>
    </div>
  )
}

export default memo(BlogCard)