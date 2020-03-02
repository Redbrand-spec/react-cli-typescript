import Axios from "../../../lib/axios";
import { message } from "antd";

interface Type {
  type: string;
  name: string;
  categories:
    | [
        {
          _id: string;
          name: string;
          capacity: number;
          value: number;
          events:
            | [
                {
                  _id: string;
                  type: string;
                  amount: number;
                  category: string;
                  date: string;
                  description: string;
                }
              ]
            | [];
        }
      ]
    | [];
}

export const GetUserData = (
  token: string,
  dispatch: React.Dispatch<React.SetStateAction<Type>>
) => {
  const headers = { headers: { Authorization: "Bearer " + token } };
  const Data = {
    token: token
  };

  Axios.post("api/userdata", Data, headers)
    .then(req => {
      dispatch({
        type: "ADD_USER_DATA",
        name: req.data.name,
        categories: req.data.categories
      });
    })
    .catch(() => {
      message.error("Данные пользователя не получены");
    });
};
