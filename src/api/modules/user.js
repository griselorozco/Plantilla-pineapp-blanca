import { apiHttp } from '../axiosApi.js'
import {

  userPath, userSave, userLogin,

} from '../config/apiRoute.js'

export const createUsers = (body) =>
  apiHttp('POST', `${userSave}`, body)

export const editUsers = (userId, body) =>
  apiHttp('PUT', `${userSave}/${userId}`, body)

export const getUsers = () =>
  apiHttp('GET', `${userPath}`)

export const loginApi = ({ email, password }) => {
  console.log('loginApi, function login en los metodos api:')
  console.log(email)
  console.log(password)
  console.log('ruta endpoint:', userLogin)
  return apiHttp('GET', `${userLogin}`, null, {
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       Authorization: 'Basic ' + btoa(`${email}:${password}`),
    },
  })
}
