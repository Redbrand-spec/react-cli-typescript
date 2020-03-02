import React, { useState, useEffect } from "react";

const DateVal: React.FC = (): JSX.Element => {
  const [date, setDate] = useState<number>(new Date().getTime());

  useEffect(() => {
    window.setInterval(() => {
      setDate(new Date().getTime());
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [false]);

  let Day: string = "";
  let Month: string = "";
  let Hours: string = "";
  let Minutes: string = "";
  let Sec: string = "";

  // день
  if (new Date(date).getDate() < 10) {
    Day = "0" + String(new Date(date).getDate());
  } else {
    Day = String(new Date(date).getDate());
  }
  //месяц
  if (new Date(date).getMonth() + 1 < 10) {
    Month = "0" + String(new Date(date).getMonth() + 1);
  } else {
    Month = String(new Date(date).getMonth() + 1);
  }
  //час
  if (new Date(date).getHours() < 10) {
    Hours = "0" + String(new Date(date).getHours());
  } else {
    Hours = String(new Date(date).getHours());
  }
  //минуты
  if (new Date(date).getMinutes() < 10) {
    Minutes = "0" + String(new Date(date).getMinutes());
  } else {
    Minutes = String(new Date(date).getMinutes());
  }
  //секунды
  if (new Date(date).getSeconds() < 10) {
    Sec = "0" + String(new Date(date).getSeconds());
  } else {
    Sec = String(new Date(date).getSeconds());
  }
  return (
    <>
      {Day}.{Month}.{new Date(date).getFullYear()} | {Hours}:{Minutes}:{Sec}{" "}
    </>
  );
};

export default DateVal;
