import * as moment from 'moment';
import { TimePeriod } from 'shared/types/models';

const availablePeriodicity: TimePeriod[] = ['week', 'month', 'quarter', 'year'];

export const getInFundConfig = {
  minRegularPayment: 10,
  maxRegularPayment: 100000,
  availablePeriodicity,
  minRetirementDate: moment().startOf('day').add(10, 'years'),
  maxRetirementDate: moment().startOf('day').add(50, 'years'),
};
