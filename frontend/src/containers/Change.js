import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ChangeC } from '../components';
import { change, check } from '../api/auth';

export default class Change extends Component {
  state = {
    id: '',
    pw: '',
    name: '',
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
    const { id, pw, name } = this.state;
    if (id.length < 1) return toast.error('아이디를 입력해주세요');
    if (pw.length < 1) return toast.error('비밀번호를 입력해주세요');
    if (name.length < 1) return toast.error('이름을 입력해주세요');

    change(this.state)
      .then((res) => {
        toast.success('수정 완료');
      })
      .catch((err) => {
        const errMsg = ['다시 시도해주세요', '없는 아이디입니다'];
        toast.error(errMsg[err.response.data.code]);
      });
  };

  render() {
    return (
      <div>
        <ChangeC {...this} {...this.state} {...this.props} />
      </div>
    );
  }
}
