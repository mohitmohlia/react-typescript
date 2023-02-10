import React from "react";
import Person from "../components/Person";

// extracting the Props from Person component without importing the type
function CustomComponent(props: React.ComponentProps<typeof Person>) {
  return (
    <div>
      {props.person.age}
      {props.person.name}
      {props.person.salary}
    </div>
  );
}

export default CustomComponent;
