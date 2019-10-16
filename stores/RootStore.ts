import { RouterStore } from '../stores/RouterStore'
import { ControlStore } from '../stores/ControlStore'
import { createContext } from 'react';

export class RootStore {
  routerStore = new RouterStore(this);
  controlStore = new ControlStore(this);
}

export const RootStoreContext = createContext(new RootStore())