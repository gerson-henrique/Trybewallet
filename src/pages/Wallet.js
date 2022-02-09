import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <nav>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field"> 0 </h3>
          <h3 data-testid="header-currency-field"> BRL </h3>
        </nav>
        <div>
          <label htmlFor="despesa">
            despesa
            <input type="number" name="despesa" data-testid="value-input" />
          </label>
          <textarea placeholder="descrição" data-testid="description-input" />
          <label htmlFor="moeda">
            moeda
            <input type="text" name="moeda" data-testid="currency-input" />
          </label>
          <select data-testid="method-input">
            <option value="dinheiro"> Dinheiro </option>
            <option value="credit_card"> Cartão de crédito </option>
            <option value="debt_card"> Cartão de débito </option>
          </select>
          <select data-testid="tag-input">
            <option value="alimentação"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saúde"> Saúde </option>
          </select>
          <button type="button">
            { /* implementar API RQ4 */ }
            Adicionar despesas
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Wallet);
