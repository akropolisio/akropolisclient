import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';
import * as backgroundFon from './images/background.png';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: `url(${backgroundFon})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.colors.white,
  }),

  content: rule({
    width: '51.25rem',
    maxWidth: '51.25rem',
    minHeight: '43.75rem',
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
    fontSize: '1.875rem',
    marginBottom: '3.125rem',
  }),

  text: rule({
    textTransform: 'uppercase',
    fontFamily: theme.typography.primaryFont,
    fontSize: '0.6875rem',
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
    alignSelf: 'stretch',
    padding: '0 11rem',
  }),

  signInButton: rule({
    marginBottom: '0.625rem',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
