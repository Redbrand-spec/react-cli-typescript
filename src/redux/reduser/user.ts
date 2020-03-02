import { Categories } from "../../constants";

interface Init {
  name: string;
  categories: [] | [Categories];
}

interface Action {
  type: string;
  name: string;
  categories: [Categories];
}

const init: Init = {
  name: "",
  categories: []
};

const User = (state: Init = init, action: Action) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      return {
        categories: action.categories,
        name: action.name
      };
    default:
      return {
        ...state
      };
  }
};

export default User;
