export const METHOD_V60 = 'V60'

export const AVAILABLE_METHODS = () => [
  {
    name: METHOD_V60,
    color: '#A0702D'
  }
].map(method => {
  return {
    ...method,
    icon: require(`@/assets/icons/${method.name}.svg`)
  }
})
