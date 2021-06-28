const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw Error(`Please check "${selection}" selector, no such element exist`)
}

export { allProductsUrl, singleProductUrl, getElement }
