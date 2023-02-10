// type PersonProps = {
//   person: {
//     name: string;
//     age: number;
//     salary: number;
//   };
// };

import PersonProps from "../types/Person.types";

const Person = (props: PersonProps) => {
  const { person } = props;

  return (
    <div>
      hello {person.name} {person.age} your salary is {person.salary}
    </div>
  );
};
export default Person;
