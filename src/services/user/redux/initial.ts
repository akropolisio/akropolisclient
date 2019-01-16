import * as NS from '../namespace';
import { initialCommunicationField } from 'shared/helpers/redux';

export const initial: NS.IReduxState = {
  communication: {
    loadingUser: initialCommunicationField,
  },
  data: {
    user: null,
    role: null,
    isLogged: false,
  },
};
