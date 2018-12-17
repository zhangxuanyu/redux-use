function addToCart(product, quantity, unitCost) {
    return {
      type: 'car',
      payload: { product, quantity, unitCost }
    }
  }

export default addToCart