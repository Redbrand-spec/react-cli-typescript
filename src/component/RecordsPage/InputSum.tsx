import React, { useState, useEffect } from "react";

interface Props {
  setInputSumValue: React.Dispatch<React.SetStateAction<number | string>>;
}

// инпут для вода суммы Формы события

const InputSum: React.FC<Props> = (props): JSX.Element => {
  const [value, setValue] = useState<number | string>(0);

  useEffect(() => {
    props.setInputSumValue(value);
    // eslint-disable-next-line
  }, [value]);

  const Validation = (event: string) => {
    if (/^[0-9]+$/.test(event) && event.length < 10) {
      setValue(Number(event));
    }

    if (event === "") {
      setValue(event);
    }
  };

  return (
    <input
      onChange={e => Validation(e.target.value)}
      type="number"
      value={value}
      id="amount"
      className="form-control"
    />
  );
};

export default InputSum;
