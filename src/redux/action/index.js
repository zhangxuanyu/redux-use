const ADD_TO_CART = 'ADD_TO_CART';

function addToCart(product, quantity, unitCost) {
    return {
      type: ADD_TO_CART,
      payload: {
        product,
        quantity,
        unitCost
      }
    }
  }

let actions = {
    ADD_TO_CART,
    addToCart
}

export default actions