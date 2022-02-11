import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAwesomeThunk, requestCoinValues } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestAwesomeThunk());
  }

   saveExpendState = () => {
     console.log('test');
     const { dispatch } = this.props;
     dispatch(requestCoinValues(this.state));
     this.setState({
       value: '',
     });
   }

  saveState = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  saveHeaderDebt = () => {
    const { expend } = this.props;
    return expend.reduce((acc, { value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0);
  }

  render() {
    const { email, currencies, expend } = this.props;
    const {
      value,
      description,
    } = this.state;
    return (
      <div>
        <nav>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field">
            {
              this.saveHeaderDebt().toFixed(2)
            }
          </h3>
          <h3 data-testid="header-currency-field"> BRL </h3>
        </nav>
        <div>
          <label htmlFor="value">
            value
            <input
              type="number"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.saveState }
            />
          </label>
          <textarea
            placeholder="description"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.saveState }
          />
          <label htmlFor="moeda">
            moeda

            <select
              id="moeda"
              name="currency"
              data-testid="currency-input"
              onChange={ this.saveState }
            >
              { currencies.USD ? (
                Object.values(currencies).map((coin) => {
                  if (coin.codein !== 'BRLT' && coin.code !== 'DOGE') {
                    return (
                      <option
                        data-testid={ coin.code }
                        key={ coin.code }
                        value={ coin.code }
                      >
                        { coin.code }
                      </option>);
                  }

                  return undefined;
                })
              )
                : (
                  <option>
                    carregando..
                  </option>
                ) }
            </select>
          </label>

          <select
            id="method"
            name="method"
            data-testid="method-input"
            onChange={ this.saveState }
          >
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
          <label htmlFor="tag">
            tag
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.saveState }
            >
              <option value="Alimentação"> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saúde"> Saúde </option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.saveExpendState }
          >
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
          <tbody>
            {expend && (
              expend.map((data) => (
                <tr key={ data.id }>
                  <td>{data.description}</td>
                  <td>{data.tag}</td>
                  <td>{data.method}</td>
                  <td>{parseFloat(data.value).toFixed(2)}</td>
                  <td>{data.exchangeRates[data.currency].name}</td>
                  <td>{parseFloat(data.exchangeRates[data.currency].ask).toFixed(2)}</td>
                  <td>
                    {(data.value * data.exchangeRates[data.currency].ask).toFixed(2)}
                  </td>
                  <td> Real</td>
                </tr>))
            )}
          </tbody>
        </table>

      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expend: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  // getCorrency: PropTypes.func.isRequired,
  // coinData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expend: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCorrency: () => dispatch(requestAwesomeThunk()),
//   coinData: (state) => dispatch(requestCoinValues(state)),
// });

export default connect(mapStateToProps)(Wallet);
