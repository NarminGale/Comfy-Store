import { store } from './store.js'

const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = () => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return formattedPrice
}

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  setStorageItem,
  getStorageItem,
}
