import * as NS from '../../namespace';
import { initial } from '../initial';

export function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data'] {
  switch (action.type) {
    case 'USER:COMPLETE_AUTHENTICATION': {
      return {
        ...state,
        role: action.payload.role,
        isLogged: true,
      };
    }
    case 'USER:LOAD_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case 'USER:UPDATE_USER': {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    default: return state;
  }
}
