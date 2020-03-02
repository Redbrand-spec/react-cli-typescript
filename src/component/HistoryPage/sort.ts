interface Data {
  type: string;
  amount: number;
  name: string;
  date: number;
}

export const Sort = (type: string, action: string, ListVal: [Data] | any[]) => {
  return SortList(type, action, ListVal);
};

const SortList = (type, action, ListVal) => {
  if (action === "plus") {
    return ListVal.sort((a, b) => {
      let num = 0;
      if (a[type] > b[type]) return 1;
      if (a[type] < b[type]) return -1;
      return num;
    });
  }
  if (action === "minus") {
    return ListVal.sort((a, b) => {
      let num = 0;
      if (a[type] < b[type]) return 1;
      if (a[type] > b[type]) return -1;
      return num;
    });
  }
};
