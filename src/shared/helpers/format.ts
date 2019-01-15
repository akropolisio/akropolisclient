import accounting from 'accounting';
import { GetProps } from '_helpers';
import SliderSelectField from 'shared/view/form/SliderSelectField/SliderSelectField';

export function formatUSDAmount(value: number): string {
  return accounting.formatMoney(value);
}

export const formatSliderLabelDefault: NonNullable<GetProps<typeof SliderSelectField>['formatLabel']> =
  item => item.label || '';
