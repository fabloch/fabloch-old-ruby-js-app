const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (['user@example.com'].includes(values.email)) {
        throw { email: 'That username is taken' }
      }
    })
}
