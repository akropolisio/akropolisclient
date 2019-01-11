import * as NS from '../../namespace';
import { initial } from '../initial';

export function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data'] {
  switch (action.type) {
    case 'USER:COMPLETE_AUTHENTICATION': {
      return {
        ...state,
        isLogged: true,
        role: action.payload.role,
      };
    }
    default: return state;
  }
}
