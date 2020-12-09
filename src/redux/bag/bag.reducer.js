import { BagActionTypes } from './bag.types'
import { addItemToBag, removeItemFromBag } from './bag.utils'

const INITIAL_STATE = {
  hidden: true,
  bagItems: []
}

export const bagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BagActionTypes.TOGGLE_BAG_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case BagActionTypes.ADD_ITEM:
      return {
        ...state,
        bagItems: addItemToBag(state.bagItems, action.payload)
      }
    case BagActionTypes.REMOVE_ITEM:
      return {
        ...state,
        bagItems: removeItemFromBag(state.bagItems, action.payload)
      }
    case BagActionTypes.CLEAR_BAG:
      return {
        ...state,
        bagItems: []
      }
    default:
      return state
  }
}
