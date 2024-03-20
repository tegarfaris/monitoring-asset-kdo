import React, { ChangeEventHandler } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";

interface InputFieldProps {
  id: string;
  name: string;
  label?: string;
  type:React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorMessage?: string;
}

const InputField:React.FC<InputFieldProps> = ({id, name,label, type, placeholder, onChange, required, errorMessage}) => {
  return (
    <Flex flexDir="column" gap="10px">
    <Text color="white" fontSize="14px">{label}</Text>
    <Input id={id} name={name} onChange={onChange} color="white" placeholder={placeholder} type={type} required={required} size="lg" borderColor="white" _hover={{borderColor: "blue"}} />
    <Text color="red">{errorMessage && `* ${errorMessage}`}</Text>
    </Flex>
  );
};

export default InputField;
