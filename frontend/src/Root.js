import React from 'react';

import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { css } from 'glamor';

import {
  Login, Register, Change, ChangePassword, All,
} from './containers';
import './styles/index.scss';

export default () => (
  <BrowserRouter>
    <div>
      <ToastContainer
        autoClose={3000}
        position="bottom-center"
        toastClassName={css({
          background: 'black',
        })}
      />
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/changepassword" component={() => <ChangePassword />} />
        <Route path="/change" component={() => <Change />} />
        <Route path="/all" component={() => <All />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  </BrowserRouter>
);
