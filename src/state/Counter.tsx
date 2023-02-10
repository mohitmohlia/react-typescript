import { useReducer } from "react";

type State = {
  count: number;
};
// type Action = {
//   type: "increment" | "decrement" | "reset"; // type :string  -> less strict
//   payload: number;
// };

type ResetAction = {
  type: "reset";
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type Action = UpdateAction | ResetAction;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
