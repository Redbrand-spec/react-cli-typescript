import React from "react";
// скелет для обновления после регистрации
const Form2Loading: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="form-group">
        <label className="control-label" htmlFor="category-name">
          Введите название
        </label>
        <input type="text" id="category-name" className="form-control" />
        <span className="form-help-text"></span>
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="category-name">
          Введите лимит
        </label>
        <input type="text" id="category-name" className="form-control" />
        <span className="form-help-text"></span>
      </div>
    </>
  );
};

export default Form2Loading;
