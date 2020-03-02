interface Validation {
  value: string;
  style: string;
  label: string;
  status: boolean;
}

export const FormValidation = (
  event: React.ChangeEvent<HTMLInputElement>,
  input: Validation,
  setValue: React.Dispatch<React.SetStateAction<Validation>>,
  valid: string
) => {
  const Value: string = event.target.value;

  if (valid === "email") {
    EmailValidation(Value, input, setValue);
  }
  if (valid === "password") {
    PassValidation(Value, input, setValue);
  }
  if (valid === "name") {
    NameValidation(Value, input, setValue);
  }
};

const EmailValidation = (
  Value: string,
  input: Validation,
  setValue: React.Dispatch<React.SetStateAction<Validation>>
) => {
  const Input = { ...input };

  // eslint-disable-next-line
  if (
    /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i.test(
      Value
    )
  ) {
    Input.value = Value;
    Input.style = "has-success";
    Input.label = "Введен коректный емайл";
    Input.status = true;

    setValue(Input);
  } else {
    if (Value !== "") {
      Input.value = Value;
      Input.style = "has-error";
      Input.label = "Введите коректный емайл";
      Input.status = false;

      setValue(Input);
    }
  }

  if (Value === "") {
    Input.value = Value;
    Input.style = "";
    Input.label = "";
    Input.status = false;

    setValue(Input);
  }
};

const PassValidation = (
  Value: string,
  input: Validation,
  setValue: React.Dispatch<React.SetStateAction<Validation>>
) => {
  const Input = { ...input };

  if (/^[0-9a-zA-Z]+$/.test(Value) && Value.length >= 6 && Value.length <= 20) {
    Input.value = Value;
    Input.style = "has-success";
    Input.label = "Введен коректный пароль";
    Input.status = true;

    setValue(Input);
  } else {
    if (Value !== "" && /^[0-9a-zA-Z]+$/.test(Value) === false) {
      Input.value = Value;
      Input.style = "has-error";
      Input.label = "Пароль не может содержать руские буквы";
      Input.status = true;

      setValue(Input);
    } else if (Value !== "" && Value.length < 6) {
      Input.value = Value;
      Input.style = "has-error";
      Input.label = "Пароль должен быть от 6 символов и более";
      Input.status = false;

      setValue(Input);
    } else if (Value !== "" && Value.length > 20) {
      Input.value = Value;
      Input.style = "has-error";
      Input.label = "Пароль должен быть меньше 20 символов";
      Input.status = false;

      setValue(Input);
    }
  }

  if (Value === "") {
    Input.value = Value;
    Input.style = "";
    Input.label = "";
    Input.status = false;

    setValue(Input);
  }
};

const NameValidation = (
  Value: string,
  input: Validation,
  setValue: React.Dispatch<React.SetStateAction<Validation>>
) => {
  const Input = { ...input };

  if (Value.length >= 4 && Value.length <= 15) {
    Input.value = Value;
    Input.style = "has-success";
    Input.label = "Введено коректное имя";
    Input.status = true;

    setValue(Input);
  } else {
    Input.value = Value;
    Input.style = "has-error";
    Input.label = "Имя должно содержать от 4 до 15 символов";
    Input.status = false;

    setValue(Input);
  }

  if (Value === "") {
    Input.value = Value;
    Input.style = "";
    Input.label = "";
    Input.status = false;

    setValue(Input);
  }
};
