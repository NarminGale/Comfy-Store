// specific imports
import { getElement } from '../utils.js'
import display from '../displayProducts.js'
import { store } from '../store.js'

// filter imports
import setupSearch from '../filters/search.js'
import setupCompanies from '../filters/companies.js'
import setupPrice from '../filters/price.js'

const loading = getElement('.page-loading')

display(store, getElement('.products-container'))
setupSearch(store)
setupCompanies(store)
setupPrice(store)
loading.style.display = 'none'
