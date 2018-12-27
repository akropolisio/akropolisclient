import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers';

import * as actions from '../actions';
import * as NS from '../../namespace';

function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    yield call(() => void 0);
  };
}

export { getSaga };
