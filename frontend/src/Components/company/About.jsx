const About = () => {
  return (
    <section className='text-[#505153] mt-10'>
        <div className=' lg:px-36 text-center flex flex-col justify-center items-center gap-8 mx-8 lg:mx-auto'>
            <p className='text-[48px] font-bold max-w-[550px] leading-tight'>We are passionate about connecting people</p>
            <p className='text-[24px] font-light max-w-[1120px] leading-tight'>With enriched  experiences through our vast collection of media  spanning various genres, topics, and formats,  to empower individuals with knowledge, inspiration, and entertainment. We believe that access to quality content is essential for personal growth and cultural enrichmen.</p>
            <img loading="lazy" src="./about/aboutHero.png" alt="about hero pic" className='w-[500px] h-[200px] lg:w-[1403px] lg:h-[384px] my-5'/>
            <div className='text-[24px] font-bold flex flex-row flex-wrap gap-10 md:gap-20 lg:gap-40 xl:gap-60 justify-center text-start w-full lg:w-[1403px] mt-10 mb-5'>
                <p className='w-[100px]'>Various Generes</p>
                <p className='w-[100px]'>Various Generes</p>
                <p className='w-[100px]'>Various Generes</p>
                <p className='w-[100px]'>Various Generes</p>
            </div>
            <p className='text-[24px] font-light max-w-[1380px] leading-tight'>We invite you to become a part of our growing community! Whether you're a creator looking to share your work or a content enthusiast seeking inspiration, there's a place for you here. Connect with like-minded individuals, discover new perspectives, and embark on a journey of creativity and discovery with us.</p>
        </div>
        <div className='bg-[#F5F5F5] w-full my-20'>
        <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0 text-center lg:text-start'>
            <div className='flex flex-col gap-10 py-10 pl-0 lg:pl-40 xl:pl-60 lg:pr-10 mx-8 lg:mx-0'>
                <p className='text-[36px] lg:text-[48px] font-bold leading-tight lg:mr-20 xl:mr-60'>The beauty of art and the impact of knowledge.</p>
                <p className='text-[20px] lg:text-[24px] font-light leading-tight lg:mr-20 pb-10 lg:pb-0'>We invite you to become a part of our growing community! Whether you're a creator looking to share your work or a content enthusiast seeking inspiration, there's a place for you here. Connect with like-minded individuals, discover new perspectives, and embark on a journey of creativity and discovery with us.</p>
            </div>
            <img loading="lazy" src="./about/candy.png" alt="About candy" className='object-cover w-auto h-auto '/>
        </div>
        </div>
        <div className='py-20 mx-auto px-8 w-auto lg:max-w-[1406px]'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 text-center lg:text-start mx-2 lg:mx-0'>
                <p className='w-auto lg:w-[1000px] text-[24px] font-bold'>To empower the creators and connect with them</p>
                <p className='text-[24px] font-light'>From articles and blog posts to videos, podcasts, and interactive experiences, we offer a wide array of digital content across various genres and topics. Through our platform, we aim to foster a community where creators can share their talents and where users can discover content that resonates with them on a profound level.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 xl:gap-24 justify-center items-center pt-20  w-full text-white'>
                <div className='w-auto h-auto lg:w-[400px] lg:h-[234px] relative'>
                    <img src="./about/jungle.png" alt="pic1" className='w-full h-full'/>
                    <div className='absolute bottom-0 left-0 z-10 p-4 leading-tight'>
                        <p className='text-[36px] font-bold'>Convinience</p>
                        <p className='text-[24px] font-extralight'>Our platform is designed to be accessible to every one</p>
                    </div>
                </div>
                <div className='w-auto h-auto lg:w-[400px] lg:h-[234px] relative'>
                    <img loading="lazy" src="./about/redFlower.png" alt="pic2" className='w-full h-full'/>
                    <div className='absolute bottom-0 left-0 z-10 p-4 leading-tight'>
                        <p className='text-[36px] font-bold'>Inclusive</p>
                        <p className='text-[24px] font-extralight'>We strive to make our content available inclusively, creatively</p>
                    </div>
                </div>
                <div className='w-auto h-auto lg:w-[400px] lg:h-[234px] relative'>
                    <img loading="lazy" src="./about/building.png" alt="pic3" className='w-full h-full'/>
                    <div className='absolute bottom-0 left-0 z-10 p-4 leading-tight'>
                        <p className='text-[36px] font-bold'>High Standards</p>
                        <p className='text-[24px] font-extralight'>We are committed to maintaining high standards of quality across a</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#3b82f6] text-center py-10 w-full p-2 mx-auto flex flex-col justify-center items-center text-white leading-tight'>
            <p className='text-[48px] font-bold max-w-[732px]'>We invite you to become a part of our growing community!</p>
            <p className='text-[24px] font-light py-5 max-w-[1160px]'>Whether you're a creator looking to share your work or a content enthusiast seeking inspiration, there's a place for you here. Connect with like-minded individuals, discover new perspectives.</p>
            <p className='bg-white text-[#5E5E5E] py-2 font-medium rounded-full w-[300px]'>Seeking inspiration?  Connect With Us.</p>
        </div>
        <div className="mx-auto w-full flex flex-col lg:flex-row gap-10 xl:gap-60 items-center lg:items-end lg:p-20 xl:p-32 p-10 "
        style={{
            backgroundImage: `url("./about/contactBg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
            <div className='mb-20 text-white'>
            <p className='text-[48px] font-bold'>Discover new perspectives, and embark on a journey of creativity and discovery.</p>
            <p className='text-[24px] font-light'>Have questions, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out to us through our contact page, and we'll get back to you as soon as possible.</p>
            </div>
            <div className='w-auto lg:max-w-[450px] bg-white rounded-md text-center py-5 px-8'>
                <form className='w-full lg:w-[390px]'>
                    <p className='text-[36px] font-bold text-[#727272]]'>Contact Us</p>
                    <div className='flex flex-row gap-5 lg:gap-10 w-full my-3'>
                        <input type="text" className='inputContact' placeholder='First Name'/>
                        <input type="text" className='inputContact' placeholder='Last Name'/>
                    </div>
                    <input type="email" className='inputContact my-3 w-full' placeholder='Email'/>
                    <input type="number" className='inputContact my-3 w-full' placeholder='Phone'/>
                    <textarea name="contactMessage" id="contactMessage" className='inputContact my-3 w-full' placeholder='Type Your Message Here' rows={10}/>
                    <button className='nav-btn bg-[#3b82f6] text-white border border-[#3b82f6] float-end'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default About