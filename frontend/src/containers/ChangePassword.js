import React, { Component } from 'react';
import { ChangePasswordC } from '../components';

export default class ChangePassword extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <ChangePasswordC {...this} {...this.state} {...this.props} />
      </div>
    );
  }
}
