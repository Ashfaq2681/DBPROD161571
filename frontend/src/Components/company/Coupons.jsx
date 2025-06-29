import { useState } from "react"
import { couponCard } from "../index"

const Coupons = () => {

    const [coupons, setCoupons] = useState(false)
    
    const handleCoupons = () => {
        setCoupons(!coupons)
    }
  return (
    <section>
        <div className="flex flex-col items-center my-20">
            <div className="flex flex-row gap-10">
            <button onClick={handleCoupons} className={`py-1 px-3 border rounded-full ${coupons ? "bg-[#3b82f6] text-white border-[#3b82f6]" : " text-[#727272] border-[#727272]"}`}>Upcomming Coupons</button>
            <button onClick={handleCoupons} className={`py-1 px-3 border rounded-full ${coupons ? " text-[#727272] border-[#727272]" : "bg-[#3b82f6] text-white border-[#3b82f6]"}`}>Available Coupons</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {couponCard.map((items) => (
            <div className="flex flex-col items-center justify-center gap-3  bg-[#EDEDED] rounded-lg">
                <img src={items.img} alt="img" loading="lazy"/>
                <p className="text-[#3b82f6] text-[36px] font-bold -mb-3">{items.desc}</p>
                <p className="text-[12px] font-light">wide range of digital content</p>
                <p className="bg-white px-3 text-[36px] text-[#727272] font-bold border border-gray-300 rounded-md">Comming Soon</p>
                <button className="py-1 px-3 border rounded-full bg-[#3b82f6] text-white border-[#3b82f6] mb-8">Subscribe to Get</button>
            </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Coupons