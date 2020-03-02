import React from "react";

const Time: React.FC<{ date: number }> = (props): JSX.Element => {
  const time = new Date(props.date);
  let Day: string = "";
  let Mount = "";

  if (time.getDate() >= 10) {
    Day = String(time.getDate());
  } else {
    Day = "0" + String(time.getDate());
  }

  if (time.getMonth() >= 10) {
    Mount = String(time.getMonth() + 1);
  } else {
    Mount = "0" + String(time.getMonth() + 1);
  }
  return (
    <>
      {Day}.{Mount}.{String(time.getFullYear())}
    </>
  );
};

export default Time;
