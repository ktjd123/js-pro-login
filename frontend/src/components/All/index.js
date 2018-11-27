import React from 'react';

export default function index({ accounts }) {
  const result = accounts.map(account => (
    <>
      <div>
        아이디 :&nbsp;
        {account.id}
        비밀번호 :&nbsp;
        {account.pw}
        이름 :&nbsp;
        {account.name}
      </div>
      <br />
    </>
  ));
  return <div>{result}</div>;
}
