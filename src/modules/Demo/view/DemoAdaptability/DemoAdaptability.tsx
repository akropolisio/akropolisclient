import * as React from 'react';
import { Adaptive } from 'services/adaptability';
import { SimpleList, Typography } from 'shared/view/elements';

import { StylesProps, provideStyles } from './DemoAdaptability.style';
import { withProps } from 'shared/helpers/react';

function DemoAdaptability(props: StylesProps) {
  const StyledAdaptive = withProps(Adaptive, { className: props.classes.inline });

  // tslint:disable:max-line-length
  return (
    <div>
      <SimpleList>
        <Typography variant="h2">Adaptability demo</Typography>
        <Typography variant="h4">from xs to sm - <StyledAdaptive from="xs" to="sm"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from xs to md - <StyledAdaptive from="xs" to="md"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from xs to lg - <StyledAdaptive from="xs" to="lg"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from xs to xl - <StyledAdaptive from="xs" to="xl"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from sm to md - <StyledAdaptive from="sm" to="md"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from sm to lg - <StyledAdaptive from="sm" to="lg"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from sm to xl - <StyledAdaptive from="sm" to="xl"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from md to lg - <StyledAdaptive from="md" to="lg"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from md to xl - <StyledAdaptive from="md" to="xl"><b>Yes</b></StyledAdaptive></Typography>
        <div />
        <Typography variant="h4">from xs - <StyledAdaptive from="xs"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from sm - <StyledAdaptive from="sm"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from md - <StyledAdaptive from="md"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from lg - <StyledAdaptive from="lg"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">from xl - <StyledAdaptive from="xl"><b>Yes</b></StyledAdaptive></Typography>
        <div />
        <Typography variant="h4">to xs - <StyledAdaptive to="xs"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">to sm - <StyledAdaptive to="sm"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">to md - <StyledAdaptive to="md"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">to lg - <StyledAdaptive to="lg"><b>Yes</b></StyledAdaptive></Typography>
        <Typography variant="h4">to xl - <StyledAdaptive to="xl"><b>Yes</b></StyledAdaptive></Typography>
      </SimpleList>
    </div>
  );
}

export default provideStyles(DemoAdaptability);
