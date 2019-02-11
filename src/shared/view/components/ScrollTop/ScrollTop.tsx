import * as React from 'react';
import { bind, debounce } from 'decko';
import * as cn from 'classnames';
import { animateScroll } from 'react-scroll';

import { AngleArrow } from 'shared/view/elements/Icons';

import { provideStyles, StylesProps } from './ScrollTop.style';
import { IconButton } from 'shared/view/elements';

interface IState {
  isShowScrollTopButton: boolean;
}

class ScrollTop extends React.PureComponent<StylesProps> {
  public state: IState = {
    isShowScrollTopButton: false,
  };

  public componentDidMount() {
    window.addEventListener('scroll', this.checkShowingArrow);
    window.addEventListener('resize', this.checkShowingArrow);

  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.checkShowingArrow);
    window.removeEventListener('resize', this.checkShowingArrow);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div
        onClick={this.onScrollTop}
        className={cn(classes.root, { [classes.isHidden]: !this.state.isShowScrollTopButton })}
      >
        <IconButton onClick={this.onScrollTop} ><AngleArrow className={classes.arrow} /></IconButton>
      </div>
    );
  }

  @bind
  private onScrollTop() {
    animateScroll.scrollToTop();
  }

  @bind
  @debounce(500)
  private checkShowingArrow() {
    const { isShowScrollTopButton } = this.state;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.offsetHeight;
    const scrolledPageSize = scrollTop > windowHeight;
    if (!isShowScrollTopButton && scrolledPageSize) {
      this.setState({ isShowScrollTopButton: true });
    }
    if (isShowScrollTopButton && !scrolledPageSize) {
      this.setState({ isShowScrollTopButton: false });
    }
  }
}

export default provideStyles(ScrollTop);
