import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import { PromisedReturnType } from '_helpers';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers';

import * as NS from '../../namespace';
import * as actions from '../actions';

const completeAuthenticationType: NS.ICompleteAuthentication['type'] = 'USER:COMPLETE_AUTHENTICATION';

export function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    yield takeLatest(completeAuthenticationType, loadUserSaga, deps);
  };
}

export function* loadUserSaga({ api }: IDependencies) {
  try {
    yield put(actions.loadUser());
    const user: PromisedReturnType<typeof api.user.loadUser> =
      yield call(api.user.loadUser);
    yield put(actions.loaderUserSuccess({ user }));
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.loadUserFail(message));
  }
}
