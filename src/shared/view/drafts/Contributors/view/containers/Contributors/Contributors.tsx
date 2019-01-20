import * as React from 'react';
import { Button, CircleProgressBar } from 'shared/view/elements';

import { Contribution } from '../../components';
import { provideStyles, StylesProps } from './Contributors.style';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';
import { ListProvider } from 'services/dataProvider';

const tKeys = tKeysAll.features.contributors;

type IProps = StylesProps & ITranslateProps;
class Contributors extends React.PureComponent<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <ListProvider<'contributors'> resource="contributors">
        {({ items, loading }) => (
          <div className={classes.root}>
            {loading
              ? (
                <div className={classes.preloader}>
                  <CircleProgressBar size={80} variant="indeterminate" />
                </div>
              ) : (
                <div className={classes.contributionsList}>
                  {items.map((item) => (
                    <Contribution
                      key={item.id}
                      id={item.id}
                      title={item.wallet}
                      onRemove={this.onRemove}
                    />
                  ))}
                </div>
              )}
            <Button className={classes.addNewButton} variant="contained" color="primary">
              {t(tKeys.addNew.getKey())}
            </Button>
          </div>
        )}
      </ListProvider>
    );
  }

  public onRemove(_id: number) {
    //
  }
}

export default i18nConnect(provideStyles(Contributors));
