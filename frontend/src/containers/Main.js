import React, { Component } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Main.scss';

const cx = classNames.bind(styles);

class Main extends Component {
  componentDidMount() {
    toast.success('react-toastify');
  }

  render() {
    return <div className={cx('red')}>this is the seed</div>;
  }
}

export default Main;
