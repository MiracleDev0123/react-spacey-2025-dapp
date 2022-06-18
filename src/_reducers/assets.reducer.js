import { userConstants } from '../_constants';

export function assets(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_ASSETS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_ASSETS_SUCCESS:
      return {
        items: action.assets
      };
    case userConstants.GET_ASSETS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}