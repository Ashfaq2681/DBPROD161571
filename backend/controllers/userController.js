const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//admin

const createcheckoutSession = async (req, res) => {
    const { plan, price, quantity } = req.body
    console.log(plan, price, quantity);
  
    const lineItems = {
      price_data: {
        currency: "usd",
        product_data: {
          name: plan
        },
        unit_amount: Math.round(price*100)
      },
      quantity: quantity
    }
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItems],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel"
    })
  
    res.json({id:session.id})
  }

module.exports = { signupUser, loginUser, createcheckoutSession }