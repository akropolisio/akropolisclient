import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule } from 'shared/helpers/style';
import breakpoints from 'shared/styles/breakpoints';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    padding: '3.25rem 0 1.375rem',
  }),

  preloader: rule({
    display: 'flex',
    justifyContent: 'center',
    padding: '120px 0 20px',
  }),

  avatarWrapper: rule({
    marginBottom: '2.5rem',
    alignSelf: 'center',

    [breakpoints.up('sm')]: rule({
      display: 'flex',
      flexGrow: 1,
      margin: 0,
      alignSelf: 'stretch',
    }),
  }),

  avatar: rule({
    width: '6.25rem',
    margin: 'auto',
    [breakpoints.up('sm')]: rule({
      width: '7.5rem',
    }),
  }),

  field: rule({
    marginBottom: theme.spacing.unit * 3,

    '&:last-child': {
      margin: 0,
    },

  }),

  fields: rule({
    marginBottom: theme.spacing.unit * 3.5,

    [breakpoints.up('sm')]: rule({
      flexGrow: 1,
      margin: 0,
    }),
  }),

  form: rule({}),

  formContent: rule({
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.up('sm')]: rule({
      flexDirection: 'row',
      marginBottom: '6.375rem',
    }),
  }),

  formButtons: rule({
    [breakpoints.up('sm')]: rule({
      display: 'flex',
    }),
  }),

  formButton: rule({
    marginBottom: theme.spacing.unit * 1,

    [breakpoints.up('sm')]: rule({
      width: 'auto',
      padding: '0 34px',
      margin: 0,
    }),
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
