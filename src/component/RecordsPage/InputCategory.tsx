import React, { useState, useEffect } from "react";

interface Input {
  value: string | number;
  span: string;
  style: string;
  status: boolean;
}
interface CategoryValue {
  value: string | number;
  status: boolean;
}

interface Props {
  changeinput: React.Dispatch<React.SetStateAction<CategoryValue>>;
  title: string;
  type: string;
  id: string;
}

// инпут для ввода Формы категорий суммы и названия

const CategoryInput: React.FC<Props> = (props): JSX.Element => {
  const [inputVal, setInputVal] = useState<Input>({
    value: "",
    span: "",
    style: "",
    status: false
  });

  useEffect(() => {
    const Data = {
      value: inputVal.value,
      status: inputVal.status
    };
    props.changeinput(Data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputVal]);

  return (
    <div className={"form-group " + inputVal.style}>
      <label className="control-label" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        value={inputVal.value}
        onChange={e =>
          Validation(e.target.value, e.target.type, inputVal, setInputVal)
        }
        type={props.type}
        id={props.id}
        className="form-control"
      />
      <span className="form-help-text">{inputVal.span}</span>
    </div>
  );
};

export default CategoryInput;

const Validation = (
  event: string,
  type: string,
  inputVal: Input,
  setInputVal: React.Dispatch<React.SetStateAction<Input>>
) => {
  const Data = { ...inputVal };
  switch (type) {
    case "number":
      if (/^[0-9]+$/.test(event) && event.length <= 10 && event.length >= 2) {
        Data.value = event;
        Data.span = "Валидация нет ошибки";
        Data.style = "has-success";
        Data.status = true;
        setInputVal(Data);
      } else {
        Data.value = event;
        Data.span = "Валидация  ошибка";
        Data.style = "has-error";
        Data.status = false;
        setInputVal(Data);
      }
      break;
    default:
      if (event.length <= 20 && event.length >= 6) {
        Data.value = event;
        Data.span = "Валидация нет ошибки";
        Data.style = "has-success";
        Data.status = true;
        setInputVal(Data);
      } else {
        Data.value = event;
        Data.span = "Валидация  ошибка";
        Data.style = "has-error";
        Data.status = false;
        setInputVal(Data);
      }
  }
};
