import Input from "./Input";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion as m } from "framer-motion";
import { container } from "../../animations/login";

interface LoginFormData {
  CPF: string;
  Senha: string;
}

interface LoginForm {
  blur: boolean;
  setBlur: (boolean: boolean) => void;
}

const LoginForm = (props: LoginForm) => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <m.form
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-10"
    >
      <input
        onBlur={() => {
          console.log("saiu");
        }}
        onFocus={() => {
          console.log("entrou");
        }}
        type="text"
      />
      <Input
        type="text"
        placeholder="CPF"
        register={register("CPF", { required: "CPF is required" })}
        onFocus={() => {
          console.log("ENTROU");
          props.setBlur(true);
        }}
        onBlur={() => {
          console.log("SAIU");
        }}
      />
      <span className="text-5xl text-white">{`${props.blur}`}</span>
      <Input
        type="password"
        placeholder="password"
        register={register("Senha", { required: "Password is required" })}
      />
      <Button type="submit" />
    </m.form>
  );
};

export default LoginForm;
