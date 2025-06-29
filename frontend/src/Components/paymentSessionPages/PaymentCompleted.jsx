import React from 'react'
import { useNavigate } from 'react-router-dom';

const PaymentCompleted = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/');
    }
    return (
        <div className='mx-auto p-16 rounded-lg shadow-lg bg-white text-gray-600 max-w-5xl mt-20 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-semibold'>Thank you for your order.</h1>
            <p className='text-[16px] font-light my-2'>Your payment is successful, you’ll get a confirmation mail sooner.</p>
            <h4 className='font-semibold mt-4'>Animation Templates</h4>
            <button
                onClick={handleBackToHome}
                className="mt-3 nav-btn bg-[#3b82f6] text-white border border-[#3b82f6] font-bold w-full sm:w-52 h-10">
                Back to Home
            </button>
        </div>
    )
}
export default PaymentCompleted;