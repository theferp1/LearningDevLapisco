import { TextInput, TextInputProps } from "@mantine/core";

interface InputProps extends TextInputProps {}

const InputSignup = ({ ...rest }: InputProps) => {
  return <TextInput {...rest} />;
};

export default InputSignup;
