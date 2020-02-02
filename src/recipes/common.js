import V60 from './V60'

export const METHOD_V60 = 'V60'

export const AVAILABLE_METHODS = () => [
  {
    name: METHOD_V60,
    color: '#A0702D',
  }
].map(method => {
  return {
    ...method,
    icon: require(`@/assets/icons/${method.name}.svg`)
  }
})

export const DEFAULT_NO_CUPS = 2
export const DEFAULT_CUPSIZE = 150

export const COFFEE_AMNT_PER_100 = 6

export const waterCoffeeRatio = (water, coffee = COFFEE_AMNT_PER_100) => water * coffee / 100

export const getMethodClass = (method, water) => {
  const waterAmount = water || DEFAULT_CUPSIZE * DEFAULT_NO_CUPS
  const coffeeAmount = waterCoffeeRatio(waterAmount)

  switch(method) {
    case METHOD_V60:
      return new V60({ coffeeAmount, waterAmount })
    default:
      return {}
  }
}
