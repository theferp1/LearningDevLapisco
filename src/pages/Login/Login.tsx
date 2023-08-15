import { useState } from "react";

const Login = () => {
  const [blur, setBlur] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center ">
      <div className="z-[15] flex flex-col mb-44 gap-20 items-center justify-center">
        <img
          src="/WhiteLapiscoLogo.svg"
          alt=""
          className={` w-[250px]  focus:animate-spin `}
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
            className="w-[366px] rounded-[20px] h-[65px] px-5 bg-[#3E3E3E]  bg-opacity-50 backdrop-blur-md placeholder-white text-white text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#BCBCBC]"
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
            className="w-[366px] rounded-[20px] h-[65px] px-5 bg-[#3E3E3E] bg-opacity-50 backdrop-blur-md placeholder-white text-white text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#BCBCBC]"
          />
          <button className="text-xl bg-white text-black font-bold w-fit px-12 hover:bg-slate-200 h-[65px] rounded-[20px]">
            Entrar
          </button>
        </form>
      </div>

      <div className=" absolute w-screen h-screen  bg-black bg-opacity-[0.85] z-10"></div>
      <img
        src="/WalppaperLoginTransformed.png"
        alt=""
        className={`absolute lg:w-screen lg:h-screen z-0 transition-all duration-500 ${
          blur ? "blur-lg" : "blur-0"
        }`}
      />
    </div>
  );
};

export default Login;
