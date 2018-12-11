import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default function index({ accounts }) {
  const result = accounts.map(account => (
    <tr key={account._id}>
      <td>{account.id}</td>
      <td>{account.pw}</td>
      <td>{account.name}</td>
      <td>{account.studentNumber}</td>
      <td>{account.phoneNumber}</td>
      <td>{account.email}</td>
      <td>{account.else1}</td>
      <td>{account.else2}</td>
      <td>{account.else3}</td>
    </tr>
  ));
  return (
    <table className={cx('table')}>
      <tbody>
        <tr>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>이름</th>
          <th>학번</th>
          <th>핸드폰 번호</th>
          <th>이메일</th>
          <th>기타1</th>
          <th>기타2</th>
          <th>기타3</th>
        </tr>
        {result}
      </tbody>
    </table>
  );
}
