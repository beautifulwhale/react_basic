import { ADD_PERSON } from "../constant";

const initState = [{ id: "1", name: "Tom", age: 12 }];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
