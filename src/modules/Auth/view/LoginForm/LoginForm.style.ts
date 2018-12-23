import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    width: '100%',
    height: '100%',
    display: 'flex',
  }),

  content: rule({
    margin: 'auto',
    width: '50rem',
    minWidth: '50rem',
    height: '37.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3.125rem 4.375rem 6.25rem',
    boxShadow: '0 1px 12px 0 rgba(0, 0, 0, 0.5)',
  }),

  logo: rule({
    width: '40%',
  }),

  text: rule({
    textTransform: 'uppercase',
    fontFamily: theme.typography.primaryFont,
    fontSize: '0.75rem',
    textAlign: 'center',
  }),

  subTitle: rule({
    composes: '$text',
    marginBottom: '1.25rem',
  }),

  title: rule({
    composes: '$text',
    fontSize: '2.25rem',
    fontWeight: 'bold',
  }),

  selectRole: rule({
    composes: '$text',

  }),

  roles: rule({}),

  signButtons: rule({
    width: '48%',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
