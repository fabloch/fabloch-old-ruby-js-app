import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validateInput = (data) => {
  let errors = {}

  if (!validator.isEmail(data.email) || validator.isEmpty(data.email)) {
    errors.email = ['This field must filled with an Email']
  } else {
    delete(errors.email)
  }

  if (validator.isEmpty(data.password)) {
    errors.password = ['This field is required']
  } else {
    delete(errors.password)
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateInput;
