import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { bind } from 'decko';
import { GetProps, Omit } from '_helpers';

import { Slider } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';

type IProps = Omit<GetProps<typeof Slider>, 'value'> & WrappedFieldProps;

class SliderField extends React.Component<IProps> {
  public render() {
    const { input, meta, ...rest } = this.props;
    return (
      <Slider {...rest} {...input} onChange={this.onChange} />
    );
  }

  @bind
  private onChange(_event: React.ChangeEvent<{}>, value: number) {
    this.props.input.onChange(value);
  }
}

export default getFieldWithComponent(SliderField);
