import { UseFormRegisterReturn } from "react-hook-form";
import { motion as m } from "framer-motion";
import { item } from "../../animations/login";

interface Input {
  type: string;
  value?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = (props: Input) => {
  return (
    <div className="overflow-hidden">
      <m.input
        variants={item}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        {...props.register}
        className="w-[266px] h-[55px] md:w-[366px] rounded-[20px] md:h-[65px] px-5 bg-[#3E3E3E] focus:placeholder-transparent  bg-opacity-[0.45] backdrop-blur-sm placeholder-white text-white text-md md:text-xl font-medium focus:outline-none  "
      />
    </div>
  );
};

export default Input;
