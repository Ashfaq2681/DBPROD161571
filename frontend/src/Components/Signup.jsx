import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../CustomHooks/useSignup";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [check, setCheck] = useState(false)
  const [passError, setpassError] = useState(false)
  const [checkError, setCheckError] = useState("")
  const { signup, googleSignup, error, isLoading } = useSignup()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (password != retypePass) {
      setpassError(true)
    // } else if (!check) {
    //   setCheckError("Please accept out terms and conditions")
    } else {
      await signup(email, password)
      setpassError(false)
      setCheck(false)
      setCheckError("")
      setEmail("")
      setPassword("")
      setRetypePass("")
    }
  }

  return (
    <section className="bg-[#F9FAFB] h-lvh flex flex-row justify-center pt-20 mt-5 lg:mt-0">
      <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-r-none border border-[#c7c7c7] md:border-r-0 p-12 lg:px-2 m-4 md:m-0 md:mr-0 shadow-2xl bg-white text-[#727272] h-[680px] lg:h-[664px] max-w-[400px] lg:max-w-full">
        <p className="text-[36px] font-bold">Signup</p>
        <p className="text-[16px]">
          Welcome back please enter your details to start your creative journey
        </p>
        <form className="my-4 space-y-3">
          <input
            type="email"
            placeholder="Login"
            name="signup"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputAuth"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputAuth"
          />
          <input
            type="password"
            placeholder="Retype Password"
            name="repassword"
            value={retypePass}
            onChange={(e) => setRetypePass(e.target.value)}
            className="inputAuth"
          />
          {passError && <p className="text-red-500 text-[18px]">Passwords don't match</p>}
        </form>
        <form className="flex flex-row gap-2 mx-2 mt-6 items-center justify-center">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="w-5 h-5"
            value={check}
            onClick={() => setCheck(!check)}
          />
          <label htmlFor="terms" className="text-[13px] text-start leading-4">
            By signing the account. you accept our{" "}
            <a href="#" className="text-[#4A16D8] hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#4A16D8] hover:underline">
              Privacy Policy
            </a>
          </label>
        </form>
        <p className="text-red-500 text-[18px]">{checkError}</p>
        <button
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit}
          className="px-8 rounded-full bg-[#4A16D8] text-white py-3 my-5 w-[280px] text-[24px] font-semibold"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 text-[18px]">{error}</p>}
        <p>Or Continue With</p>
        <div className="flex flex-row justify-center items-center gap-2 my-2">
        <GoogleLogin
          type="icon"
          text="Google"
          onSuccess={async (credentialResponse) => {
            const credits = credentialResponse.credential
            const decoded = jwtDecode(credits)
            // console.log(decoded);
            await googleSignup(decoded.name, decoded.picture)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
          <button
            href="#"
            className="border border-[#727272] rounded-lg p-2 flex flex-row justify-center items-center gap-4 pr-5 text-[#969696]"
          >
            <img loading="lazy" src="./login/apple.png" alt="apple" className="w-6 h-6" />
            Apple
          </button>
        </div>
        <p className="mt-5">
          Already Have An Account
          <Link
            to={`/login`}
            className="underline underline-offset-3 font-semibold ml-1"
          >
            Log In
          </Link>
        </p>
      </div>
      <img
        loading="lazy"
        src="./grid/img28.jpeg"
        alt="login-image"
        className="hidden rounded-r-[16px] md:inline-block md:h-[680px] lg:h-[664px] md:w-[363px] lg:w-[481px] object-cover"
      />
    </section>
  );
};

export default Signup;
