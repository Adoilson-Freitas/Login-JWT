import {
  FormControl,
  Input as ChackraInput,
  InputProps as ChakraInputProps,
  FormLabel,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <FormControl>
      <FormLabel color="teal">{label}</FormLabel>
      <ChackraInput
        borderColor="teal"
        size="lg"
        pr="4.5rem"
        name={name}
        value={name}
        {...rest}
      />
    </FormControl>
  );
};
