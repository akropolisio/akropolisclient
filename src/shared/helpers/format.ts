import accounting from 'accounting';
import { GetProps } from '_helpers';
import SliderSelectField from 'shared/view/form/SliderSelectField/SliderSelectField';

export function formatUSDAmount(value: number): string {
  return accounting.formatMoney(value);
}

export const formatSliderLabelDefault: NonNullable<GetProps<typeof SliderSelectField>['formatLabel']> =
  item => item.label || '';

export function shortenString(value: string, maxLength: number): string {
  return value.length <= maxLength
    ? value
    : `${value.slice(0, Math.floor(maxLength / 2))}...${value.slice(-Math.ceil(maxLength / 2))}`;
}
