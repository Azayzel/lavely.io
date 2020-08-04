import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth'
import articlesReducer from './reducers/articles'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer
})

const store = createStore(
  rootReducer,
  composeEnhances(applyMiddleware(thunk))
)

export default store
