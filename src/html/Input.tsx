type InputProps = React.ComponentProps<"input">;
function CustomInput({ ...rest }: InputProps) {
  return <input {...rest} />;
}

export default CustomInput;
