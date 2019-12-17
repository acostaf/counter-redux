import { handleActions } from "redux-actions";
import { increment, decrement, reset } from "../actions/index";

export const reducer = handleActions(
  {
    [increment]: (state, { payload }) => {
      return { ...state, counter: state.counter + payload };
    },
    [decrement]: (state, { payload }) => {
      return { ...state, counter: state.counter + payload };
    },
    [reset]: (state, { payload }) => {
      return { ...state, counter: payload };
    }
  },
  { counter: 0 }
);
