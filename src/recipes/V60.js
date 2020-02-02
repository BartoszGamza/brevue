const name = 'V60'
const icon = require('@/assets/icons/V60.svg')
const color = '#A0702D'

export default class V60 {
  constructor({
    coffeeAmount,
    waterAmount
  }) {
    this.coffeeAmount = parseInt(coffeeAmount)
    this.waterAmount = parseInt(waterAmount)
    this.boiledWater = this.waterAmount + 100
  }


  get meta () {
    return {
      name, icon, color
    }
  }

  get ingredients () {
    return [
      `${this.coffeeAmount}g of coffee`,
      `${this.boiledWater}ml of water`,
      `V60 drip and filter`
    ]
  }

  get preparations () {
    return [
      `Grind ${this.coffeeAmount}g of coffee, medium-fine coarse`,
      `Boil at least ${this.boiledWater}ml of water`,
      `Rinse the filter with boiled water`,
      `Insert coffee into filter, put on scale`
    ]
  }

  get brewingSteps () {
    const bloomingPour = this.coffeeAmount * 2
    const secondPour = this.waterAmount * 0.6

    return [
      {
        text: `Pour in ${bloomingPour}g of water.`,
        wait: 35,
      },
      {
        text: `Pour until you reach ${secondPour}g in total.`,
        timerText: 'Finish pouring by',
        timerAutostart: true,
        wait: 30,
      },
      {
        text: `Pour untill you reach reach ${this.waterAmount}g in total.`,
        timerText: 'Finish pouring by',
        timerAutostart: true,
        wait: 30,
      }
    ]
  }
}
