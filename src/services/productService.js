import api from './api'

const productService = {
  getProducts: () => {
    const url = '/products'
    return api.get(url)
  },
  getProduct: (id) => {
    const url = `/products/${id}`
    return api.get(url)
  },
  getFavoriteProducts: () => {
    const url = '/favorites'
    return api.get(url)
  },
}

export default productService 
