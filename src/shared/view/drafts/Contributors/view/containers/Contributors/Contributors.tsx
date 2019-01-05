import * as React from 'react';
import { Button } from 'shared/view/elements';

import { Contribution } from '../../components';
import { provideStyles, StylesProps } from './Contributors.style';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';

const tKeys = tKeysAll.features.contributors;

type IProps = StylesProps & ITranslateProps;
class Contributors extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.contributionsList}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Contribution
              key={i}
              id={i}
              title="0x0000000000000000000000000000000000000000"
              onRemove={this.onRemove}
            />
          ))}
        </div>
        <Button className={classes.addNewButton} variant="contained" color="primary">{t(tKeys.addNew.getKey())}</Button>
      </div>);
  }

  public onRemove(_id: number) {
    //
  }
}

export default i18nConnect(provideStyles(Contributors));
