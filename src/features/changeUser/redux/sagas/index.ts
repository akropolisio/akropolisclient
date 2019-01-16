import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import { PromisedReturnType } from '_helpers';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers';
import { actions as userActions } from 'services/user';

import * as NS from '../../namespace';
import * as actions from '../actions';

const editMainInfoType: NS.IEditMainInfo['type'] = 'CHANGE_USER:EDIT_MAIN_INFO';

function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    yield takeLatest(editMainInfoType, editMainInfoSaga, deps);
  };
}

export function* editMainInfoSaga({ api }: IDependencies, { payload }: NS.IEditMainInfo) {
  try {
    const user: PromisedReturnType<typeof api.user.editMainInfo> =
      yield call(api.user.editMainInfo, payload);
    yield put(userActions.updateUser(user));
    yield put(actions.editMainInfoSuccess());
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.editMainInfoFail(message));
  }
}

export { getSaga };
