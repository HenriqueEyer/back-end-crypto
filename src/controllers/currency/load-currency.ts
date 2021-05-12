import { successRequestGetCurrency } from '../helpers/http-helper'
import { Controller, GetCurrency, HttpRequest, HttpResponse } from '../../interfaces'

export default class LoadCurrencyController implements Controller {
  private readonly currency: GetCurrency

  constructor (currency: GetCurrency) {
    this.currency = currency
  }

  async handle (httpRequest?: HttpRequest): Promise<HttpResponse> {
    const data = await this.currency.getCurrency()
    return successRequestGetCurrency(data)
  }
}
