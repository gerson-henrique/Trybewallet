import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginWallet } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      lock: true,
      email: '',
      password: '',
    };
  }

  handleEmail = ({ target }) => {
    this.setState({
      email: target.value,
    }, this.lockHandle);
  }

  handlePass = ({ target }) => {
    this.setState({
      password: target.value,
    }, this.lockHandle);
  }

  handleClick = () => {
    const { payload } = this.props;
    const { email } = this.state;
    payload(email);
    this.setState({
      redirect: true,
    });
  }

  lockHandle = () => {
    const { email, password } = this.state;
    const passwordMinLenght = 6;
    if (email.includes('@email.com') && password.length >= passwordMinLenght) {
      this.setState({
        lock: false,
      });
    } else {
      this.setState({
        lock: true,
      });
    }
  };

  render() {
    const { lock, redirect } = this.state;
    return (
      <div>
        <input
          name="emailIPT"
          type="email"
          data-testid="email-input"
          onChange={ this.handleEmail }
        />
        <input
          name="passwordIPT"
          type="password"
          data-testid="password-input"
          minLength="6"
          onChange={ this.handlePass }
        />
        <button
          type="button"
          disabled={ lock }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        {redirect ? <Redirect to="/carteira" /> : null}
      </div>
    );
  }
}

Login.propTypes = {
  payload: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  payload: (value) => dispatch(loginWallet(value)),
});

export default connect(null, mapDispatchToProps)(Login);
