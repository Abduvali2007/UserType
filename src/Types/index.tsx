import { Interface } from "readline";

export interface IGeo {
  [key: string]: string;
}

export interface IAddres {
  street: string;
  city: string;
  geo: IGeo;
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  addres: IAddres;
}
export interface ICountName {
  common: string;
}
export interface ICountFlag {
  png: string;
}
export interface ICountries {
  name: ICountName;
  area: number;
  flags: ICountFlag;
}
