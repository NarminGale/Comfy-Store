const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw Error(`Please check "${selection}" selector, no such element exist`)
}
