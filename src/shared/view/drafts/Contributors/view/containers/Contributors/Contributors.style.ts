import injectSheet, { WithStyles } from 'react-jss';

import { rule } from 'shared/helpers/style';

const styles = () => ({
  root: {},

  contributionsList: rule({
    overflow: 'auto',
    maxHeight: '25rem',
    marginBottom: '2.5rem',
  }),

  addNewButton: rule({
    padding: '0 2.125rem',
  }),

});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
