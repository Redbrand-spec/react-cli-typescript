import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";

import { Categories } from "../../constants";

interface Props {
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

interface Option {
  _id: string;
  name: string;
}

interface State {
  User: { categories: [Categories] | [] };
}

// селект для выбора категорий Формы события

const SelectFC: React.FC<Props> = (props): JSX.Element => {
  // eslint-disable-next-line
  const categories = useSelector((state: State) => state.User.categories);
  // eslint-disable-next-line
  const [optionValue, setOption] = useState<any[]>([]);

  const { Option } = Select;

  useEffect(() => {
    if (categories.length > 0) {
      let Arr: [Option] | any[] = [];
      categories.forEach(val => {
        const Data: Option = {
          _id: val._id,
          name: val.name
        };
        Arr.push(Data);
      });
      setOption(Arr);
    }
  }, [categories]);

  const onChange = value => {
    props.setSelectValue(value);
  };
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder={
        categories.length ? "Выберете категорию" : "категории отсутствуют"
      }
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input: any, option: any) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {optionValue.map((val, index) => {
        return (
          <Option key={index} value={val._id}>
            {val.name}
          </Option>
        );
      })}
    </Select>
  );
};
export default SelectFC;
