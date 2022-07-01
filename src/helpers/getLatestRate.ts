import axios, {AxiosResponse} from "axios";

const url = 'https://api.exchangerate.host/latest';

export function getLatestRate(base: string, symbols: string) {
  return axios.get(`${url}?base=${base}&symbols=${symbols}`)
    .then((response: AxiosResponse) => {
      return response.data.rates.UAH.toFixed(2)
    })
}
