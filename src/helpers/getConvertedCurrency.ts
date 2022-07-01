import axios, {AxiosResponse} from "axios";

const url = 'https://api.exchangerate.host/convert';

export function getConvertedCurrency(from: string | undefined, to: string, amount: string) {
  return axios.get(`${url}?from=${from}&to=${to}&amount=${amount}`)
    .then((response: AxiosResponse) => {
      return response.data.result.toFixed(2)
    })
}
