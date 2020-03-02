import React from "react";
import { Select } from "antd";
// скелет для обновления после регистрации
const Form1Loading: React.FC = (): JSX.Element => {
  return (
    <form>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder={"Выберете категорию"}
        optionFilterProp="children"
        filterOption={(input: any, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      ></Select>
      <div className="form-group">
        <label className="control-label">Выберите тип</label>
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="amount">
          Введите сумму
        </label>
        <input
          type="number"
          value="0"
          id="amount"
          className="form-control"
          onChange={() => true}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
};

export default Form1Loading;
