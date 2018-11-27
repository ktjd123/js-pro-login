import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { LoginC } from '../components';
import { login, check } from '../api/auth';

export default class Login extends Component {
  state = {
    id: '',
    pw: '',
    auth: false,
  };

  componentDidMount = () => {
    check().then((res) => {
      this.setState({ auth: true });
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onLogin = () => {
    const { id, pw } = this.state;
    if (id.length < 1) return toast.error('아이디를 입력해주세요');
    if (pw.length < 1) return toast.error('비밀번호를 입력해주세요');

    login(this.state)
      .then((res) => {
        toast.success('로그인완료');
      })
      .catch((err) => {
        const errMsg = ['다시 시도해주세요', '없는 아이디입니다', '비밀번호를 확인해주세요'];
        toast.error(errMsg[err.response.data.code]);
      });
  };

  render() {
    return (
      <div>
        <LoginC {...this} {...this.state} {...this.props} />
      </div>
    );
  }
}
