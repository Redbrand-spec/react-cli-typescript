import Axios from "../../lib/axios";
import { message } from "antd";
import { Categories } from "../../constants";

interface Type {
  type: string;
  name: string;
  categories: [Categories] | [];
}

// отправка формы события

export const Form1add = async (
  SelectValue: string,
  RadioValue: string,
  InputSumValue: number,
  setStatusForm1: React.Dispatch<React.SetStateAction<boolean>>,
  setStatusSubmit1: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: React.Dispatch<React.SetStateAction<Type>>
) => {
  const token: string = localStorage.getItem("token");
  const headers = { headers: { Authorization: "Bearer " + token } };
  const Data = {
    type: RadioValue,
    amount: InputSumValue,
    category: SelectValue,
    token: token
  };
  setStatusSubmit1(true);
  await Axios.post("api/event", Data, headers)
    .then(req => {
      message.success("событие создано");
      setStatusForm1(true);
      window.setTimeout(() => {
        setStatusForm1(false);
      }, 10);

      const name = req.data._request.name;
      const categories = req.data._request.categories;
      dispatch({
        type: "ADD_USER_DATA",
        name: name,
        categories: categories
      });
      setStatusSubmit1(false);
    })
    .catch(() => {
      message.error("Ошибка создания события");
      setStatusSubmit1(false);
    });
  /////////////////////////////////////////////////////////////////////
};
