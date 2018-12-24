import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';
import * as backgroundFon from './images/background.png';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: `url(${backgroundFon})`,
    backgroundRepeat: 'no-repeat',
  }),

  content: rule({
    width: '51.25rem',
    minWidth: '51.25rem',
    height: '43.75rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    padding: '3.5rem 5.125rem 6.5rem',
    background: theme.colors.white,
    boxShadow: '0 0.0625rem 0.75rem 0 rgba(0, 0, 0, 0.5)',
  }),

  logo: rule({
    width: '40%',
    marginBottom: '3.125rem',
  }),

  text: rule({
    textTransform: 'uppercase',
    fontFamily: theme.typography.primaryFont,
    fontSize: '11px',
    textAlign: 'center',
  }),

  subTitle: rule({
    composes: '$text',
    marginBottom: '3.125rem',
  }),

  title: rule({
    composes: '$text',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.625rem',
  }),

  selectRole: rule({
    composes: '$text',
    marginBottom: '2.25rem',
  }),

  roles: rule({
    marginBottom: '3.125rem',
  }),

  signButtons: rule({
    width: '48%',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
