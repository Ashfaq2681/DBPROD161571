import { useState } from 'react'
import { Accordian } from '../index'
import PaymentComponent from '../Payment/paymentComponent'

const productData = {
  productName: "Premium Icons",
  price: {
    annual: 99,
  },
};

const Pricing = () => {

  const [monthly, setMonthly] = useState(true)
  const [individual, setIndividual] = useState("1")
  const [team, setTeam] = useState("1")
  const [accordianOpen, setAccordianOpen] = useState(false)

  const handleMonthly = () => {
    setMonthly(!monthly)
  }

  const handleIndividual = (value) => {
    switch (value) {
      case "1":
        setIndividual("1")
        break
      case "2":
        setIndividual("2")
        break
      case "3":
        setIndividual("3")
        break
      case "4":
        setIndividual("4")
        break
      default:
        null
    }
  }

  const handleTeam = (value) => {
    switch (value) {
      case "1":
        setTeam("1")
        break
      case "2":
        setTeam("2")
        break
      case "3":
        setTeam("3")
        break
      case "4":
        setTeam("4")
        break
      default:
        null
    }
  }

  return (
    <section>
      <div className="mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-28 items-center justify-center lg:p-16 xl:p-32 p-10 mt-10 lg:mt-0"
        style={{
          backgroundImage: `url("./pricing/pricingbg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='mb-20 text-white lg:max-w-[500px] xl:max-w-[800px]'>
          <p className='text-[48px] font-bold mb-20'>Pricing that suits you.</p>
          <p className='text-[24px] font-light'>With enriched  experiences through our vast collection of media  spanning various genres, topics, and formats,  to empower individuals with knowledge, inspiration, and entertainment. We believe that access to quality content is essential for personal growth and cultural enrichmen.</p>
        </div>
        <div className='w-auto  bg-white rounded-md text-center py-5 px-8'>
          <form className='w-full lg:w-[450px]'>
            <p className='text-[36px] font-bold text-[#727272]] text-[#727272]'>Contact Us</p>
            <div className='flex flex-row gap-5 lg:gap-10 w-full my-3'>
              <input type="text" className='inputContact' placeholder='First Name' />
              <input type="text" className='inputContact' placeholder='Last Name' />
            </div>
            <input type="email" className='inputContact my-3 w-full' placeholder='Email' />
            <input type="number" className='inputContact my-3 w-full' placeholder='Phone' />
            <textarea name="contactMessage" id="contactMessage" className='inputContact my-3 w-full' placeholder='Type Your Message Here' rows={10} />
            <button className='nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] float-end'>Submit</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-40 px-7 bg-[#F5F5F5]'>
        <div className='flex flex-row mx-auto font-bold'>
          <button onClick={handleMonthly} className={`p-4 border-y border-l rounded-l-full ${monthly ? "bg-[#4A16D8] text-white border-[#4A16D8]" : "bg-[#F5F5F5] text-black border-black"}`}>Monthly Payment</button>
          <button onClick={handleMonthly} className={`p-4 border-y border-r rounded-r-full ${monthly ? "bg-[#F5F5F5] text-black border-black" : "bg-[#4A16D8] text-white border-[#4A16D8]"}`}>Annual Payment</button>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 text-[#727272] mt-24'>
          <div className='p-10 bg-white rounded-md'>
            <p className='text-[36px] font-bold'>Individual Creator</p>
            <p className='text-[16px]'>Buy for your self pay monthly of per year</p>
            <ul className='text-[16px] mt-4 mb-5 pl-10' style={{ listStyleType: "disc" }}>
              <li>Acess our pixel-pperfect Svg icons</li>
              <li>Unimited projects & page views</li>
              <li>Mac/Windows App</li>
              <li>Free lifetime updates</li>
            </ul>
            <div onClick={() => handleIndividual("1")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${individual === "1" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Images</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>160 images</p><p>HD Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 300</p>
            </div>
            <div onClick={() => handleIndividual("2")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${individual === "2" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Vectors</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>150 vectors</p><p>Infinite Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 450</p>
            </div>
            <div onClick={() => handleIndividual("3")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${individual === "3" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Icons</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>150 vectors</p><p>Infinite Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 99</p>
            </div>
            <div onClick={() => handleIndividual("4")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${individual === "4" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Animation Templates</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>50 Templates</p><p>2K Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 899</p>
            </div>
            <button className='nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] font-bold py-1'>Buy Premium Images</button>
          </div>
          <div className='p-10 bg-white rounded-md '>
            <p className='text-[36px] font-bold'>Team Collaborator</p>
            <p className='text-[16px]'>Buy for your self pay monthly of per year</p>
            <ul className='text-[16px] mt-4 mb-5 pl-10' style={{ listStyleType: "disc" }}>
              <li>Acess our pixel-pperfect Svg icons</li>
              <li>Unimited projects & page views</li>
              <li>Mac/Windows App</li>
              <li>Free lifetime updates</li>
            </ul>
            <div onClick={() => handleTeam("1")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${team === "1" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Images</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>700 images</p><p>HD Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 1000</p>
            </div>
            <div onClick={() => handleTeam("2")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${team === "2" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Vectors</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>550 vectors</p><p>Infinite Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 1500</p>
            </div>
            <div onClick={() => handleTeam("3")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${team === "3" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Premium Icons</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>650 vectors</p><p>Infinite Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 350</p>
            </div>
            <div onClick={() => handleTeam("4")} className={`flex flex-row gap-24 justify-between items-center py-3 pl-10 pr-5 border ${team === "4" ? "border-black" : "border-gray-250"} rounded-lg my-5 cursor-pointer`}>
              <div>
                <p className='text-[26px] font-bold'>Animation Templates</p>
                <div className='flex flex-row gap-5 text-[16px] mt-2'><p>240 Templates</p><p>2K Resolution</p></div>
              </div>
              <p className='text-[30px] font-bold'>$ 2699</p>
            </div>
            <button className='nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] mx-auto font-bold py-1'>Buy Premium Images</button>
          </div>
        </div>
      </div>
      <div className='px-7 md:px-20 lg:px-40 py-20 text-[#727272] bg-white'>
        <p className='text-[24px] font=bold'>Q & A</p>
        {Accordian.map((items) => (
          <div key={items.q} className='p-4 rounded-lg border border-[#505153] my-5'>
            <button onClick={() => setAccordianOpen(!accordianOpen)} className='flex justify-between items-center w-full'>
              <p className='text-[24px] font-bold'>{items.q}</p>
              {accordianOpen ? <img loading="lazy" src="./pricing/faqup.png" alt="arrowdown" /> : <img loading="lazy" src="./pricing/faqdown.png" alt='arrowup' />}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out mr-[200px] ${accordianOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <p className='overflow-hidden text-[16px] font-light '>{items.a}</p>
            </div>
          </div>
        ))}
        <button className='nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] mx-auto font-bold py-1'>Explore more Faqs</button>
      </div>
      <div className="flex justify-center bg-[#F5F5F5] py-11">
        <PaymentComponent
          productName={productData.productName}
          price={productData.price}
        />
      </div>
    </section>
  )
}

export default Pricing