import * as React from 'react';

import * as icons from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './DemoIcons.style';
import { Typography } from 'shared/view/elements';

function DemoIcons(props: StylesProps) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {Object.values(icons).map((Icon: React.StatelessComponent) => (
        <div className={classes.icon}>
          <Icon />
          <Typography className={classes.iconName}>{Icon.displayName || Icon.name}</Typography>
        </div>
      ))}
    </div>
  );
}

export default provideStyles(DemoIcons);
