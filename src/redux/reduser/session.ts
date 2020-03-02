interface Init {
  token: string;
}

interface Action {
  type: string;
  token: string;
}

const init: Init = {
  token: ""
};

const Session = (state: Init = init, action: Action) => {
  switch (action.type) {
    case "SESSION_TOKEN_ADD":
      return {
        ...state,
        token: action.token
      };
    default:
      return {
        ...state
      };
  }
};

export default Session;
