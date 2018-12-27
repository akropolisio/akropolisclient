import uuid from 'uuid';
import * as NS from '../../namespace';
import { TransactionType, ABIRequestDataByType, ABIRequest, ITransaction } from 'shared/types/models';

export function signTransaction<T extends TransactionType>(
  type: T, data: ABIRequestDataByType[T],
): NS.ISignTransaction {
  return {
    type: 'SIGN_TRANSACTION:SIGN_TRANSACTION',
    payload: { type, data, uuid: uuid() } as ABIRequest,
  };
}

export function saveSignedTransaction(transaction: ITransaction): NS.ISaveSignedTransaction {
  return {
    type: 'SIGN_TRANSACTION:SAVE_SIGNED_TRANSACTION',
    payload: transaction,
  };
}
