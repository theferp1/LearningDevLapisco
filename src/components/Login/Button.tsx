import { motion as m } from "framer-motion";
import { item } from "../../animations/login";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="overflow-hidden">
      <m.button
        variants={item}
        type={props.type}
        className=" select-none text-md md:text-xl bg-white text-black font-bold w-fit px-7 md:px-12 hover:bg-slate-200 h-[50px] md:h-[65px] rounded-[20px]"
      >
        Entrar
      </m.button>
    </div>
  );
};

export default Button;
