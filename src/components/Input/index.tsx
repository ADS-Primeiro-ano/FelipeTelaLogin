import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Error, Input as InputRegisterStyles, Label } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error, ...rest }: InputProps, ref) => {

  console.log(error);
 
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputRegisterStyles
        id={name}
        name={name}
        isError={!!error}
        ref={ref}
        {...rest}
      />
      {!!error && <Error>{error.message}</Error>}
    </>
  )
};
export const Input = forwardRef(InputBase)