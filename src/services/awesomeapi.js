const AWESOME_API_BASE = 'https://economia.awesomeapi.com.br/json/all';

const getCorrency = async () => {
  const response = await fetch(AWESOME_API_BASE);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCorrency;
// {
//   {
//     "USD": {
//       "code":"USD",
//       "codein":"BRL",
//       "name":"Dólar Americano/Real Brasileiro",
//       "high":"5.6689",
//       "low":"5.6071",
//       "varBid":"-0.0166",
//       "pctChange":"-0.29",
//       "bid":"5.6173",
//       "ask":"5.6183",
//       "timestamp":"1601476370",
//       "create_date":"2020-09-30 11:32:53"
//       },
//      ...
//   }
// }
