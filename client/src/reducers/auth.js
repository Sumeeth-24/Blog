import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
     case actionType.LOGOUT:
       localStorage.clear();

       return { ...state, authData: null };

       case actionType.UPDATE_USER:
      return { ...state, authData: state.auth.map((user) => (user._id === action.payload._id ? action.payload : user)) };

       case actionType.DELETE_USER:
      return { ...state, authData: state.auth.filter((user) => user._id !== action?.data) };
    default:
      return state;
  }
};

export default authReducer;