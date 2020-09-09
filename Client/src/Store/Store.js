import { createStore } from 'redux'
import Reducer from '../Reducers/Reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const store = createStore(Reducer,devToolsEnhancer())

export default store;