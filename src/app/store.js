import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import gridReducer from '../features/Grid/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducers = combineReducers({
    grid: gridReducer
})

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

export default store