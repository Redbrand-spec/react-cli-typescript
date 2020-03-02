import React from "react";
import Time from "./date";

interface Data {
  type: string;
  amount: number;
  name: string;
  date: number;
}
interface Props {
  list: [Data] | any;
}

const List: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="card-block">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Тип</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((Value, index) => {
            return Value.type === "Доход" ? (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{Value.amount}</td>
                <td>
                  <Time date={Value.date} />
                </td>
                <td>{Value.name}</td>
                <td>
                  <span className="label label-success">{Value.type}</span>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{Value.amount}</td>
                <td>
                  <Time date={Value.date} />
                </td>
                <td>{Value.name}</td>
                <td>
                  <span className="label label-danger">{Value.type}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
