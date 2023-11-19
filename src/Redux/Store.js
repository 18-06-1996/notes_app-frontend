import {applyMiddleware,legacy_createStore,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './users/User.reducer'
import { noteReducer } from './notes/Note.reducer'
let rootReducer=combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))