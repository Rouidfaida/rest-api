import { ADD, ADD_PRODUCT, DELET, DELETE_PRODUCT, EDIT, EDIT_PRODUCT, GET, GETID, GET_PRODUCT } from './actiontype'

let init = {
  users: null,
  loading: true,
}
let initial=
{
  products:null,  loading: true,

}
export const reducerUser = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        users: payload,
      }
    
    case DELET:
      return {
        ...state,
        loading: false,
        users: state.users.filter((el) => el._id !== payload),
      }
    case GETID:
      return {
        ...state,
        loading: false,
        users: state.users.find((el) => el._id == payload),
      }
    case ADD:
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      }
    case EDIT:
      return {
        ...state,
        loading: false,
        users: state.users.map((el) =>
          el._id === payload ? { ...el, ...payload } : el,
        ),
      }

    default:
      return state
  }
}
//product reducer
export const reducerProduct = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,

        products: payload,
      }
      case DELETE_PRODUCT:
        return{
          ...state,loading:false,
          products:state.products.filter(el=>el._id!==payload)
        }
        case ADD_PRODUCT:
          return{
            ...state,loading:false,
            products: [...state.products, payload],
          }
          case EDIT_PRODUCT:
            return{
              ...state,loading:false,
              products:state.products.map(el=>el._id==payload?{...el,...payload}:el)
            }
      default:
        return state
      }
    }
