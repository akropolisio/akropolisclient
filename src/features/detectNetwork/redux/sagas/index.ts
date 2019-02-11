import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { IDependencies } from 'shared/types/app';

import * as actions from '../actions';

function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    while (true) {
      yield call(awaitOfflineSaga, deps);
      yield put(actions.setNetworkStatus('offline'));
      yield call(awaitOnlineSaga, deps);
      yield put(actions.setNetworkStatus('online'));
    }
  };
}

function awaitOnlineSaga({ api }: IDependencies): Promise<void> {
  return new Promise(resolve => {
    const unsubscribe = api.subscribeResponses(response => {
      resolve();
      unsubscribe();
      return response;
    });
  });
}

function awaitOfflineSaga({ api }: IDependencies) {
  return new Promise(resolve => {
    const unsubscribe = api.subscribeResponses(undefined, error => {
      // TODO ds: check on real backend (https://github.com/axios/axios/issues/383#issuecomment-308606088)
      if (!error.status) {
        // network error
        resolve();
        unsubscribe();
      }
      // if (!error.response) {
      //   // network error
      //   resolve();
      //   unsubscribe();
      // }
      return error;
    });
  });
}

export { getSaga };
