import { setStorageItem } from './utils.js'

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
}

let store = getStorageItem('store')
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product

    const image = img[0].thumbnails.large.url
    return { id, featured, name, price, company, colors, image }
  })
  setStorageItem('store', store)
}
console.log(store)
const findProduct = () => {}

export { store, setupStore, findProduct }
