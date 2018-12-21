import * as React from 'react';
import {
  SimpleList, Button, Typography, CheckboxInput, CircleProgressBar,
} from 'shared/view/elements';

import { StylesProps, provideStyles } from './DemoGUI.style';
import { ToggleButtons, TextInputs, RadioGroups } from './components';

function DemoGUI(_props: StylesProps) {
  return (
    <div style={{ padding: 20 }}>
      <ToggleButtons />

      <SimpleList marginFactor={4} direction="row">
        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Default color</Typography>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined" disabled>Outlined disabled</Button>
          <Button variant="contained" disabled>Contained disabled</Button>
        </SimpleList>

        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Primary color</Typography>
          <Button variant="outlined" color="primary">Outlined</Button>
          <Button variant="contained" color="primary">Contained</Button>
          <Button variant="outlined" color="primary" disabled>Outlined disabled</Button>
          <Button variant="contained" color="primary" disabled>Contained disabled</Button>
        </SimpleList>

        <SimpleList marginFactor={0} gutter>
          <Typography variant="h4">ProgressBar</Typography>
          <CircleProgressBar variant="indeterminate" size={100} value={85} />
        </SimpleList>
      </SimpleList>

      <TextInputs />

      <SimpleList marginFactor={4} direction="row">
        <RadioGroups />

        <SimpleList marginFactor={0} gutter>
          <Typography variant="h4">CheckBoxes</Typography>
          <CheckboxInput label="Checked" checked />
          <CheckboxInput label="Unchecked" />
          <CheckboxInput label="Required" required />
          <CheckboxInput label="Disabled checked" disabled checked />
          <CheckboxInput label="With error" error helperText="Unknown error" />
        </SimpleList>

      </SimpleList>
    </div>
  );
}

export default provideStyles(DemoGUI);
