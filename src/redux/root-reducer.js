import { combineReducers } from 'redux'

import { bagReducer } from './bag/bag.reducer'

export default combineReducers({
  bag: bagReducer
})
