import * as React from 'react';
import {
  TextInput, SimpleList, Button, Typography, RadioGroupInput, FormControlLabel, Radio, MenuItem, CheckboxInput,
  ToggleButtonGroup, ToggleButton,
} from 'shared/view/elements';

function DemoGUI() {
  return (
    <div style={{ padding: 20 }}>
      <SimpleList marginFactor={2} gutter>
        <Typography variant="h4">Toggle button group</Typography>
        <ToggleButtonGroup exclusive value="beneficiary">
          <ToggleButton value="beneficiary">Beneficiary</ToggleButton>
          <ToggleButton value="fund owner">Fund owner</ToggleButton>
          <ToggleButton value="board member">Board member</ToggleButton>
          <ToggleButton value="asset manager">Asset manager</ToggleButton>
        </ToggleButtonGroup>
      </SimpleList>

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
      </SimpleList>

      <SimpleList marginFactor={4} direction="row">
        <SimpleList marginFactor={2} alignItems="stretch" gutter>
          <Typography variant="h4">Underlined input</Typography>
          <TextInput label="Your email" variant="standard" required />
          <TextInput label="Your email" variant="standard" error helperText="Wrong email" />
          <TextInput label="Your email" value="disabled" variant="standard" disabled />
          <TextInput label="Select" value={1} variant="standard" select fullWidth>
            {[1, 2, 3, 4, 5].map(item => (
              <MenuItem key={item} value={item}>Item #{item}</MenuItem>
            ))}
          </TextInput>
        </SimpleList>

        <SimpleList marginFactor={2} alignItems="stretch" gutter>
          <Typography variant="h4">Outlined input</Typography>
          <TextInput label="Your email" variant="outlined" />
          <TextInput label="Your email" variant="outlined" error helperText="Wrong email" />
          <TextInput label="Your email" value="disabled" variant="outlined" disabled />
          <TextInput label="Select" value={1} variant="outlined" select fullWidth>
            {[1, 2, 3, 4, 5].map(item => (
              <MenuItem key={item} value={item}>Item #{item}</MenuItem>
            ))}
          </TextInput>
        </SimpleList>

        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Multiline inputs</Typography>
          <TextInput label="Static input" variant="outlined" multiline rows={3} />
          <TextInput
            error
            multiline
            rows={3}
            variant="outlined"
            label="Multiline with error"
            helperText="Unknown error"
          />
          <TextInput label="Dynamic input" variant="outlined" multiline rowsMax={4} />
          <TextInput label="Dynamic underlined" variant="standard" multiline rowsMax={4} />
        </SimpleList>

        <SimpleList marginFactor={2} gutter>
          <Typography variant="h4">Other inputs</Typography>
          <TextInput label="Visa input" variant="outlined" maskType="visa" />
          <TextInput label="Password input" variant="outlined" type="password" />
        </SimpleList>
      </SimpleList>

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

export default DemoGUI;
