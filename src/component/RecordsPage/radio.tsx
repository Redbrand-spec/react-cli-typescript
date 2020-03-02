import React, { useState, useEffect } from "react";
import { Radio } from "antd";

interface Props {
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}

// выбор дохода или расхода Формы события

const RadioEl: React.FC<Props> = (props): JSX.Element => {
  const [value, setValue] = useState<string>("Доход");

  useEffect(() => {
    props.setRadioValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChange = (event: string) => {
    setValue(event);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
    fontSize: "17px"
  };

  return (
    <Radio.Group onChange={e => onChange(e.target.value)} value={value}>
      <Radio style={radioStyle} value={"Доход"}>
        Доход
      </Radio>
      <Radio style={radioStyle} value={"Расход"}>
        Расход
      </Radio>
    </Radio.Group>
  );
};

export default RadioEl;
