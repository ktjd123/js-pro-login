import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';

const cx = classNames.bind(styles);

export default function index() {
  return <div className={cx('red')}>This is the seed</div>;
}
