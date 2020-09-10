import { createStore, applyMiddleware } from 'redux'
import Reducer from '../Reducers/Reducer'
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
