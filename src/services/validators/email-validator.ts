import { EmailValidator } from '../../controllers/interfaces'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}