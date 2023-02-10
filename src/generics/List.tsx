type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
function List<
  T extends
    | string
    | number
    | { id: number; firstName: string; lastName: string }
>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div onClick={() => onClick(item)} key={index}>
            {typeof item === "object"
              ? `${item.firstName} ${item.lastName}`
              : item}
          </div>
        );
      })}
    </div>
  );
}

export default List;
