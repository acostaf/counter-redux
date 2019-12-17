import { createActions } from "redux-actions";

export const { increment, decrement, reset } = createActions(
  "INCREMENT",
  "DECREMENT",
  "RESET"
);
