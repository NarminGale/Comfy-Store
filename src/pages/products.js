// specific imports
import { getElement } from '../utils.js'
import display from '../displayProducts.js'
import { store } from '../store.js'

const loading = getElement('.page-loading')

display(store, getElement('.products-container'))

loading.style.display = 'none'
