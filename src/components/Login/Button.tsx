import { HTMLMotionProps, motion as m } from "framer-motion";
import { item } from "../../animations/login";

interface ButtonProps extends HTMLMotionProps<"button"> {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <div className="overflow-hidden">
      <m.button
        variants={item}
        {...rest}
        className=" select-none text-md md:text-xl bg-white text-black font-bold w-fit px-7 md:px-12 hover:bg-slate-200 h-[50px] md:h-[65px] rounded-[20px]"
      >
        {text}
      </m.button>
    </div>
  );
};

export default Button;
