import Axios from "../../lib/axios";
import { message } from "antd";
import { Categories } from "../../constants";

interface Type {
  type: string;
  name: string;
  categories: [Categories] | [];
}
// отправка формы категории

export const Form2add = async (
  InputCategoryValue: string,
  InputLimitValue: number,
  setStatusForm2: React.Dispatch<React.SetStateAction<boolean>>,
  setStatusSubmit2: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: React.Dispatch<React.SetStateAction<Type>>
) => {
  const token = localStorage.getItem("token");

  const headers = { headers: { Authorization: "Bearer " + token } };
  const Data = {
    categories: {
      name: InputCategoryValue,
      capacity: InputLimitValue,
      bill: 0
    },
    token: token
  };
  setStatusSubmit2(true);
  await Axios.post("api/category", Data, headers)
    .then(req => {
      dispatch({
        type: "ADD_USER_DATA",
        name: req.data.name,
        categories: req.data.categories
      });

      setStatusSubmit2(false);
      setStatusForm2(true);
      window.setTimeout(() => {
        setStatusForm2(false);
      }, 10);

      message.success("категория создана");
    })
    .catch(() => {
      setStatusSubmit2(false);
      message.error("Ошибка в создании категории");
    });

  /////////////////////////////////////////////////////////////////////
};
