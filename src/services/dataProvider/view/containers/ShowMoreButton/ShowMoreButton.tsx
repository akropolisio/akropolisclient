import * as React from 'react';

import { IPaginationToChildrenProps } from 'shared/types/models';
import { Button, CircleProgressBar } from 'shared/view/elements';
import { Arrow } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './ShowMoreButton.style';

interface IOwnProps {
  pagination: IPaginationToChildrenProps;
  loading: boolean;
  fullWidth?: boolean;
}

type IProps = IOwnProps & StylesProps;

function ShowMoreButton(props: IProps) {
  const { pagination, loading, classes, ...restProps } = props;
  const { perPage, total, loadMore } = pagination;
  const isDisabled = loading || perPage >= total;
  return (
    <Button {...restProps} color="primary" variant="outlined" onClick={loadMore} disabled={isDisabled}>
      {'Show more '}
      <div className={classes.icon}>
        {loading
          ? <CircleProgressBar size={22} />
          : <Arrow />
        }
      </div>
    </Button>
  );
}

export default provideStyles(ShowMoreButton);
