import { filmReducer as film } from './film/filmReducer'
import { coversReducer as covers } from './covers/coversReducer'
import { uiReducer as ui } from './ui/uiReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducers = combineReducers({ film, covers, ui })
const middleware = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(reducers, middleware)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
