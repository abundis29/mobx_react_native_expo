

import {observable} from 'mobx'
import { createContext } from 'react'

type Routes = 'MainScreen' | 'SettingScreen'

export class RouterStore {
    @observable screen = 'MainScreen'
}



