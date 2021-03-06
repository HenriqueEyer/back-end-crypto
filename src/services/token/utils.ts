import path from 'path'
import { promises } from 'fs'
import validator from 'validator'
import { FileToken } from '../../interfaces/token'

export const getTokens = async (): Promise<FileToken> => {
  const content = await promises.readFile(path.resolve(__dirname,'..','..', 'data', 'tokens.json'), 'utf8')
  return JSON.parse(content)
}

export const isValidToken = async (token: string): Promise<boolean> => {
  const isValidFormat = validator.isAlphanumeric(token) && token.length === 16
  if (!isValidFormat) {
    return false
  }
  const { tokens } = await getTokens()
  const isGenerateToken = tokens.some(value => value === token)
  if (!isGenerateToken) {
    return false
  }
  return true
}

export const generateToken = (): string => `${Math.random().toString(36).slice(-10)}${Math.random().toString(36).slice(-6)}`

export const saveToken = async (token: string, fileName = 'tokens.json'): Promise<boolean> => {
  let isSuccess = false
  const { tokens } = await getTokens()
  tokens.push(token)
  const obj = {
    tokens
  }

  await promises.writeFile(path.resolve(__dirname,'..','..','data', fileName), JSON.stringify(obj))
    .then(() => {
      isSuccess = true
    })
    .catch(() => {
      isSuccess = false
    })
  return isSuccess
}
