import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { MainC } from '../components';

class Main extends Component {
  componentDidMount() {
    toast.success('react-toastify');
  }

  render() {
    return <MainC />;
  }
}

export default Main;
