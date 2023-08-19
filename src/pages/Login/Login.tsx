import { useContext } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { motion as m } from "framer-motion";
import { BlurContext } from "../../provider/BlurContext";

const Login = () => {
  const { blur } = useContext(BlurContext);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-400 ">
      <div className="z-[15] flex flex-col mb-10  lg:mb-44 gap-20 items-center justify-center">
        <div className="overflow-hidden">
          <m.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="/WhiteLapiscoLogo.svg"
            alt=""
            className={` w-[170px] md:w-[250px] select-none `}
          />
        </div>
        <LoginForm />
      </div>

      <div className=" absolute w-screen h-screen  bg-black bg-opacity-[0.85] z-10"></div>
      <m.img
        initial={{}}
        src="/WalppaperLoginTransformed.png"
        alt=""
        className={`absolute  object-cover h-screen w-[2000px] lg:w-screen  z-0 transition-all duration-700 ${
          blur ? "blur-lg" : "blur-0"
        }`}
      />
    </div>
  );
};

export default Login;
