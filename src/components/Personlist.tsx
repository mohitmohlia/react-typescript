import { Person } from "../types/Person.types";

type PersonListProps = {
  list: Person[];
};

function PersonList(props: PersonListProps) {
  const { list } = props;
  return (
    <div className="person">
      {list.map((el) => {
        return (
          <div>
            {el.age}
            {el.name}
          </div>
        );
      })}
    </div>
  );
}

export default PersonList;
