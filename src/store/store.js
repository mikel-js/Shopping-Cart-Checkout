import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const initiateState = { }

const middleWare = [thunk]

const store = createStore (
  rootReducer,
  initiateState,
  compose(
    applyMiddleware(...middleWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store