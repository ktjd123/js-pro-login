import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { AllC } from '../components';
import { all } from '../api/auth';

export default class All extends Component {
  state = {
    accounts: [],
  };

  componentDidMount = () => {
    all().then((res) => {
      toast.success('불러오기 완료');
      this.setState({ accounts: res.data });
    });
  };

  render() {
    return (
      <div>
        <AllC {...this} {...this.state} {...this.props} />
      </div>
    );
  }
}
