import React from 'react';

// Css의 향상된 버전인 Scss를 편하게 사용하기 위해 className라이브러리를 불러옴
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default function index({ onChange, onLogin, auth }) {
  return (
    <div className={cx('register')}>
      <h1 style={{ fontSize: '2rem', margin: '30px' }}>사용자 추가</h1>
      <table>
        <tbody>
          <tr>
            <th>아이디 : </th>
            <td>
              <input id="id" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>비밀번호 : </th>
            <td>
              <input id="pw" type="password" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>이름 : </th>
            <td>
              <input id="name" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>학번 : </th>
            <td>
              <input id="studentNumber" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>전화번호 : </th>
            <td>
              <input id="phoneNumber" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>이메일 : </th>
            <td>
              <input id="email" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>기타 2 : </th>
            <td>
              <input id="else1" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>기타 2 : </th>
            <td>
              <input id="else2" onChange={onChange} />
            </td>
          </tr>

          <tr>
            <th>기타 3 : </th>
            <td>
              <input id="else3" onChange={onChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={onLogin}>
        사용자 추가
      </button>
      {/* <div>{auth ? '로그인되어있습니다' : '로그인이 안되어있습니다'}</div> */}
    </div>
  );
}
