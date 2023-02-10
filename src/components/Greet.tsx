type GreetProps = {
  name: string;
  messageCount?: number;
};
const Greet = (props: GreetProps) => {
  return (
    <h1>
      Hello {props.name}
      {props.messageCount}
    </h1>
  );
};

export default Greet;
