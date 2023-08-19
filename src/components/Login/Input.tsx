import { UseFormRegisterReturn } from "react-hook-form";
import { HTMLMotionProps, motion as m } from "framer-motion";
import { item } from "../../animations/login";

interface InputProps extends HTMLMotionProps<"input"> {
  register?: UseFormRegisterReturn;
}
const Input = ({ register, ...rest }: InputProps) => {
  return (
    <div className="overflow-hidden">
      <m.input
        variants={item}
        {...register}
        {...rest}
        className={`w-[266px] h-[55px] md:w-[366px] rounded-[20px] md:h-[65px] px-5 bg-[#3E3E3E] focus:placeholder-transparent  bg-opacity-[0.45] backdrop-blur-md placeholder-white text-white text-md md:text-xl font-medium focus:outline-none `}
      />
    </div>
  );
};

export default Input;
