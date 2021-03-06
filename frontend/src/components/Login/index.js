import React from 'react';

export default function index({ onChange, onLogin, auth }) {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', margin: '30px' }}>로그인</h1>
      <div>
        아이디:
        <input id="id" onChange={onChange} />
      </div>
      <div>
        비밀번호:
        <input id="pw" type="password" onChange={onChange} />
      </div>
      <button type="button" onClick={onLogin}>
        로그인
      </button>
      <div>{auth ? '로그인되어있습니다' : '로그인이 안되어있습니다'}</div>
    </div>
  );
}
