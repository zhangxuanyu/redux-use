import actions from '../action/index'

console.log(actions)
const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
      }
    ],
    num:0
  }

const cartReducer = function(state=initialState, action) {
    switch (action.type) {
      case actions.ADD_TO_CART: {
        return {
          ...state,
          num:state.num+1
        }
      }
  
      default:
        return state;
    }
  }

  export default cartReducer