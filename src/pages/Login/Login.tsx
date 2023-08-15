import { useState } from "react";

const Login = () => {
  const [blur, setBlur] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center ">
      <div className="z-[15] flex flex-col mb-10  lg:mb-44 gap-20 items-center justify-center">
        <img
          src="/WhiteLapiscoLogo.svg"
          alt=""
          className={` w-[170px] md:w-[250px]  focus:animate-spin `}
        />
        <form
          action=""
          className=" flex flex-col gap-10 items-center justify-center"
        >
          <input
            type="text"
            placeholder="E-mail/CPF"
            onFocus={() => {
              if (blur == true) {
              } else {
                setBlur(true);
              }
            }}
            onBlur={() => {
              if (blur == false) {
              } else {
                setBlur(false);
              }
            }}
            className="w-[266px] h-[55px] md:w-[366px] rounded-[20px] md:h-[65px] px-5 bg-[#3E3E3E]  bg-opacity-50 backdrop-blur-md placeholder-white text-white text-md md:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#BCBCBC]"
          />
          <input
            type="password"
            placeholder="Senha"
            onFocus={() => {
              if (blur == true) {
              } else {
                setBlur(true);
              }
            }}
            onBlur={() => {
              if (blur == false) {
              } else {
                setBlur(false);
              }
            }}
            className="w-[266px] h-[55px] md:w-[366px] rounded-[20px] md:h-[65px] px-5 bg-[#3E3E3E] bg-opacity-50 backdrop-blur-md placeholder-white text-white text-md md:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#BCBCBC]"
          />
          <button className="text-md md:text-xl bg-white text-black font-bold w-fit px-7 md:px-12 hover:bg-slate-200 h-[50px] md:h-[65px] rounded-[20px]">
            Entrar
          </button>
        </form>
      </div>

      <div className=" absolute w-screen h-screen  bg-black bg-opacity-[0.85] z-10"></div>
      <img
        src="/WalppaperLoginTransformed.png"
        alt=""
        className={`absolute w-[640px] h-screen sm:w-[768px] sm:h-screen md:w-[1024px] object-cover md:h-screen lg:w-screen lg:h-screen z-0 transition-all duration-500 ${
          blur ? "blur-lg" : "blur-0"
        }`}
      />
    </div>
  );
};

export default Login;
