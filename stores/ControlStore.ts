import { createContext } from "react";
import { observable } from "mobx";

export class ControlStore {
  id: number;
  @observable residentId: number;
  @observable name: string;
  @observable comment: string;
  @observable date: string;
  @observable status: string;
  @observable media: string;
  @observable kind: string;
  @observable user: number;
  @observable authBy: string;
  @observable searchTerm: string;
  @observable searchTermValue: string;
}

// interface ControlHistory {
//     [key:string]: Array<{

//     }

// }
