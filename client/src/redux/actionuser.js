import { ADD, ADD_PRODUCT, DELET, DELETE_PRODUCT, EDIT, EDIT_PRODUCT, GET, GETID, GET_PRODUCT } from './actiontype'
import axios from 'axios'

export const getUser = () => async (dispatch) => {
  try {
    let res = await axios.get('/user/get/')
    dispatch({
      type: GET,
      payload: res.data,
    })
  } catch (error) {
    alert('error get')
  }
}
export const getUserId = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/user/get/${id}`)
    dispatch({
      type: GETID,
      payload: res.data,
    })
  } catch (error) {
    alert('error get')
  }
}
export const deleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${id}`)
    dispatch({
      type: DELET,
      payload: res.data,
    })
  } catch (error) {
    alert('error delete')
  }
}
export const addUser = (name, email, number) => async (dispatch) => {
  try {
    let newuser = { name, email, number }
    let res = await axios.post('/user/post/', newuser)
    dispatch({
      type: ADD,
      payload: res.data,
    })
  } catch (error) {
    alert('error add')
  }
}
export const editUser = (id, name, email, number) => async (dispatch) => {
  try {
    let newuser = { id, name, email, number }
    let res = await axios.put(`/user/put/${id}`, newuser)
    dispatch({
      type: EDIT,
      payload: res.data,
    })
  } catch (error) {
    alert('error edit')
  }
}
//product
//get product
export const getProduct = () => async (dispatch) => {
  try {
    let res = await axios.get('/product/get/')
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    })
  } catch (error) {
    alert('error get product')
  }
}
//Delete product
export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        let res= await axios.delete(`/product/delete/${id}`)
        dispatch({
            type:DELETE_PRODUCT,
            payload:res.data
        })
        
    } catch (error) {
        alert('error delete product')
        
    }
}
//add product
export const addProduct=(name,price,quantite)=>async(dispatch)=>{
    try {
        let newProduct={name,price,quantite}
        let res = await axios.post('/product/post',newProduct)
        dispatch({
            type:ADD_PRODUCT,
            payload:res.data
        })
    } catch (error) {
        alert('error add product')
        
    }
}
//edit product
export const editProduct =(id,name,price,quantite)=>async(dispatch)=>{
    try {
        let newproduct={id,name,price,quantite}
        let res= await axios.put(`/product/put/${id}`,newproduct)
        dispatch({
            type:EDIT_PRODUCT,
            payload:res.data
        })

        
    } catch (error) {
        alert('error edit product')
    }
}