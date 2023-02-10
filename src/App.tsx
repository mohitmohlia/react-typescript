import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/Personlist";
import Status from "./components/Status";
import Header from "./components/Header";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./state/LoggedIn";
// import User from "./state/User";
import UserTypeAssertion from "./state/UserTypesAssertion";
// import Counter from "./state/Counter";
import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";
import User from "./context/User";
import MutableRef from "./ref/MutableRef";
import Counter from "./class/Counter";
import Private from "./auth/Private";
import Profile from "./auth/Profile";
import List from "./generics/List";
import RandomNumber from "./restriction/RandomNumber";
import Toast from "./templateliteral/Toast";
import CustomButton from "./html/Button";
import CustomInput from "./html/Input";
import CustomComponent from "./html/CustomComponent";
import Text from "./polymorphic/Text";

function App() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      {/* <Greet name={"mohit"} />
      <Person person={{ name: "mohit", age: 24, salary: 990 }} />
      <PersonList list={[0, 2, 4, "mohit"]} /> */}
      {/* <Status status="loading" />
      <Status status="success" />
      <Status status="error" /> */}
      {/* <Header>Hello ji</Header>
      <Oscar>
        <Header>Oscar goes to Mohit Mohlia</Header>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      />
      <Input value={input} handleChange={(input) => setInput(input)} />
      {input} */}
      {/* <PersonList
        list={[
          { age: 24, name: "mohit", salary: 0 },
          { age: 29, name: "rohit", salary: 100 },
        ]}
      />
      <Person person={{ name: "mohit", age: 24, salary: 990 }} />
      <Container
        styles={{
          border: "3px solid white",
          padding: "3rem",
          borderRadius: "1rem",
        }}
      /> */}
      {/* <LoggedIn /> */}
      {/* <User />
      <UserTypeAssertion /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef /> */}
      {/* <Counter message="Hello" /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["batman", "superman", "wonder woman", "spiderman"]}
        onClick={(item) => console.log(item)}
      />{" "}
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { firstName: "bruce", lastName: "wayne", id: 1 },
          { firstName: "peter", lastName: "parker", id: 2 },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive isNegative isZero />   // will not work together because of restriction*/}
      {/* <RandomNumber value={-1} isNegative />
      <Toast position="right-top" />
      <Toast position="center" /> */}
      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
      <CustomInput
        type="range"
        min={1}
        max={9}
        onChange={(e) => console.log(e.target.value)}
      ></CustomInput> */}
      {/* <CustomComponent person={{ name: "mohit", age: 2, salary: 2000 }} /> */}

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        paragraph
      </Text>
      <Text as="label" htmlFor="someid" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
