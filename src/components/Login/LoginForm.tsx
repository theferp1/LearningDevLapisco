import { useContext, useState } from "react";
import { BlurContext } from "../../provider/BlurContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion as m } from "framer-motion";
import { container } from "../../animations/login";
import Input from "./Input";
import Button from "./Button";

interface LoginFormData {
  CPF: string;
  Senha: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const { setBlur } = useContext(BlurContext);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <m.form
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-10 w-fit"
    >
      <Input
        type="text"
        placeholder="CPF"
        register={register("CPF", { required: "CPF is required" })}
        onFocus={() => {
          setBlur(true);
        }}
        onBlur={() => {
          setBlur(false);
        }}
      />
      <Input
        type="password"
        placeholder="Senha"
        onFocus={() => {
          setBlur(true);
        }}
        onBlur={() => {
          setBlur(false);
        }}
        register={register("Senha", { required: "Password is required" })}
      />
      <Button type="submit" text="Entrar" />
    </m.form>
  );
};

export default LoginForm;
