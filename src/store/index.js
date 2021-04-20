import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux'
import Thunk from 'redux-thunk'

import { fileDataReducer } from './reducers/fileData'


const reducer = combineReducers({
    fileData : fileDataReducer,
})


export const store = createStore(
    reducer,
    applyMiddleware(Thunk)
)