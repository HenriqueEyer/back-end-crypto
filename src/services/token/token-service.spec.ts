import { TokenServiceAdapter } from './token-service'
import validator from 'validator'

describe('TokenService', () => {
  test('Should TokenService return a token with size 16', () => {
    const sut = new TokenServiceAdapter()
    const token = sut.generateToken('any_email','any_password')
    expect(token.length).toBe(16)
  })

  test('Should TokenService return a token just with Alfanumeric', () => {
    const sut = new TokenServiceAdapter()
    const token = sut.generateToken('any_email','any_password')
    const isAphaNumeric = validator.isAlphanumeric(token)
    expect(isAphaNumeric).toBe(true)
  })
})