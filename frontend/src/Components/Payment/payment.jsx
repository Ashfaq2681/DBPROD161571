import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./productData";
import PaymentDiscountBtn from './paymentDiscountBtn';

function Payment() {
    const [selectedProduct] = useState(products[0]);
    const [isAnnual, setIsAnnual] = useState(true);
    const navigate = useNavigate();

    // Calculate the price based on the selected plan (Annual or Monthly)
    const selectedPrice = isAnnual ? selectedProduct.price.annual : selectedProduct.price.monthly;

    function paymentSubmitHandler() {
        navigate('/completed');
    }

    return (
        <div className="mx-auto p-8 rounded-lg shadow-md bg-white text-gray-600 max-w-screen-xl">
            <h2 className="text-2xl font-bold">Ready to join?</h2>
            <p className="text-[16px] font-light my-2">
                Click Start Membership to unlock unlimited access to a world of high-quality creative content.
                Dive into the collection and find the perfect content to elevate your projects!
            </p>

            {/* Toggle between Annual and Monthly */}
            <div className="flex flex-col items-start gap-3 mb-4">
                <span className="text-lg font-semibold">{selectedProduct.name}</span>
                <div className="flex items-center space-x-2">
                    <span>{isAnnual ? "Annually" : "Monthly"}</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative w-10 h-5 rounded-full ${isAnnual ? 'bg-blue-600' : 'bg-gray-300'}`}
                    >
                        <div
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-5' : ''}`}
                        />
                    </button>
                    <PaymentDiscountBtn text={selectedProduct.discount} />
                </div>
            </div>

            <p className="text-[16px] font-light mb-2">
                {selectedPrice}$ + Taxes
            </p>
            <p className="text-[16px] font-light mb-2">
                This plan will renew {isAnnual ? "annually" : "monthly"}. You will be charged now and again at each renewal.
            </p>
            <p className="text-[16px] font-light mb-6">
                I have read and agree to curated gallery images licenses and terms of use.
            </p>

            <hr className="my-6 border-gray-300" />

            {/* Payment Form */}
            <div className="px-4 md:px-20">
                <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                <p className="text-[16px] font-light mb-4">Find and enjoy your royalty-free content in a creative way.</p>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Name" className="inputContact" />
                    <input type="text" required placeholder="Country" className="inputContact" />
                    <input type="text" required placeholder="*Address" className="inputContact col-span-2" />
                    <input type="text" required placeholder="*Address" className="inputContact col-span-2" />
                    <input type="text" required placeholder="City" className="inputContact" />
                    <input type="text" required placeholder="Postal Code" className="inputContact" />
                    <input type="text" required placeholder="Card Number" className="inputContact" />
                    <input type="text" required placeholder="CVV/CVC" className="inputContact" />
                    <input type="text" required placeholder="Expiration Date" className="inputContact" />
                    <input type="text" required placeholder="Region" className="inputContact" />
                </form>
                <button
                    onClick={paymentSubmitHandler}
                    className="mt-8 nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] font-bold w-full sm:w-40 h-10"
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Payment;
