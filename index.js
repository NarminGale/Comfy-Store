// global imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'

// specific imports
import fetchProducts from './src/fetchProducts.js'

const init = async () => {
  const products = await fetchProducts()
}

window.addEventListener('DOMContentLoaded', init)
