export const base = 'http://18.212.163.39:9000'
export const apiVersion = '/api/v1'
export const baseEndpoint = base + apiVersion

export const getProducts = baseEndpoint + '/product/getProduct'


// User
export const login = base + '/user/create-session'
export const register = base + '/user/create'