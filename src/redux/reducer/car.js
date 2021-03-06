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
    ]
  }
  
  const cartReducer = function(state=initialState, action) {
      switch(action.type){
          case 'car':{
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
          }

        default:
          return state;
      }
    
  }
  



export default cartReducer