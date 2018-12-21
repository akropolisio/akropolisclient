import * as React from 'react';
import {
  SimpleList, Button, Typography, RadioGroupInput, FormControlLabel, Radio, CheckboxInput, CircleProgressBar,
} from 'shared/view/elements';

import { StylesProps, provideStyles } from './DemoGUI.style';
import { ToggleButtons, TextInputs } from './components';

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
          <CircleProgressBar variant="static" size={100} value={85} />
        </SimpleList>
      </SimpleList>

      <TextInputs />

      <SimpleList marginFactor={4} direction="row">
        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Radio button</Typography>
          <RadioGroupInput label="Label for required radio" value="other" required>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel disabled value="disabled" control={<Radio />} label="Disabled" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroupInput>
        </SimpleList>
        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Radio with error</Typography>
          <RadioGroupInput error helperText="Unknown error" label="Label for radio buttons" value="other">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel disabled value="disabled" control={<Radio />} label="Disabled" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroupInput>
        </SimpleList>

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
