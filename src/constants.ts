export interface Categories {
  map(arg0: (Val: any, index: any) => JSX.Element): import("react").ReactNode;
  forEach(arg0: (element: any) => void);
  lenght: number;
  _id: string;
  name: string;
  capacity: number;
  value: number;
  events: any[] | [Events];
}

export interface Events {
  _id: string;
  type: string;
  amount: number;
  date: number;
}

export interface Planing {
  name: string;
  total: number;
  balance: number;
  left: number;
}
