import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import {loadStripe} from '@stripe/stripe-js';
import { baseUrl } from "../constants/strings";

export const usePlan = () => {
  const { dispatch } = useAuthContext();

  const checkSubscription = ( plan ) => {

  const selectedPlan = plan 

  //payment integration
  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51PRW2aGJyOdTC98YnoQJCsrBfUdajxs1kcqbCFV8nOOHr2UadrrUdGD2GrmCBmaZSiRcfFfhdaJyr8pc6BtX1Rkc00XX4oI78s');

    try {
      const response = await axios.post(`${baseUrl}/user/create-checkout-session`, selectedPlan, {
        headers: { "Content-Type": "application/json" },
      })
      const session = await response.data

      const result = stripe.redirectToCheckout({
        sessionId: session.id
      })

      if (result.error) {
        console.log(result.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (plan) {
    makePayment();
    dispatch({type:'PLAN', payload: selectedPlan})
  }
    console.log(selectedPlan)
  }

  return { checkSubscription };
};
