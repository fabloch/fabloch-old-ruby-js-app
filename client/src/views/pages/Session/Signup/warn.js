export const warn = values => {
  const warnings = {}
  if (values.password < 19) {
    warnings.password = 'Hmm, you seem a bit young...'
  }
  return warnings
}
