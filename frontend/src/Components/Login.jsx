import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../CustomHooks/useLogin";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleLogin, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="bg-[#F9FAFB] h-lvh flex flex-row justify-center my-10">
      <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-r-none border border-[#c7c7c7] md:border-r-0 p-12 lg:px-10 m-4 md:m-0 md:mr-0 shadow-2xl bg-white text-[#727272] h-[624px] lg:h-[664px] max-w-[400px] lg:max-w-[600px] 2xl:max-w-full">
        <p className="text-[36px] font-bold">Login</p>
        <p className="text-[16px]">
          Welcome back please enter your details to start your creative journey
        </p>
        <form className="my-6 space-y-3" action="POST">
          <input
            type="email"
            placeholder="Email"
            name="login"
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
        </form>
        <a href="#" className="underline underline-offset-3 mr-0 lg:mr-[250px]">
          Forgot Password
        </a>
        <button
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit}
          className="px-8 rounded-full bg-[#3b82f6] text-white py-3 my-5 lg:my-8 w-[280px] text-[24px] font-semibold"
        >
          Log In
        </button>
        {error && <p className="text-red-500 text-[18px]">{error}</p>}
        <p>Or Continue With</p>
        <div className="flex flex-row justify-center items-center gap-2 my-2">
          <GoogleLogin
            type="icon"
            text="signin"
            size="large"
            onSuccess={async (credentialResponse) => {
              const credits = credentialResponse.credential;
              const decoded = jwtDecode(credits);
              // console.log(decoded);
              await googleLogin(
                decoded.name,
                decoded.picture,
                decoded.given_name,
                decoded.family_name,
                decoded.email
              );
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />

          {/* <button href='#' className='border border-[#727272] rounded-lg p-2 flex flex-row justify-center items-center gap-4 pr-5 text-[#969696]'><img src="./login/google.png" alt='google' className='w-6 h-6'/>Google</button> */}
          <button
            href="#"
            className="border border-[#d6d6d6] rounded-md p-2 flex flex-row justify-center items-center gap-4  text-[#969696]"
          >
            <img
              loading="lazy"
              src="./login/apple.png"
              alt="apple"
              className="w-6 h-6"
            />
          </button>
        </div>
        <p className="mt-5">
          Don't Have An Account
          <Link
            to={`/signup`}
            href="#"
            className="underline underline-offset-3 font-semibold ml-1"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <img
        loading="lazy"
        src="./grid/black-girl-pose-jeans-top-sitting.jpeg"
        alt="login-image"
        className="hidden rounded-r-[16px] md:inline-block md:h-[625px] lg:h-[664px] lg:w-[481px] object-cover"
      />
    </section>
  );
};

export default Login;
