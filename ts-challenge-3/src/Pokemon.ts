type MoveType = {
  name: string;
  power: number;
}

export class Pokemon {
  name: string
  powerPointAvailable = 1
  constructor (name: string, powerPointAvailable: number) {
    this.name = name
    this.powerPointAvailable = powerPointAvailable
  }

  @checkPowerPoint
  figth (move: MoveType) {
    console.log(`${this.name} used ${move?.name}!`)
    this.powerPointAvailable -= 1
  }
}

function checkPowerPoint (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  console.log(target)
  descriptor.value = function (...args: any[]) {
    console.log(this)
    if (this.powerPointAvailable <= 0) {
      console.log(`${this.name} has no power points left and cannot attack!`)
      return
    }
    original.apply(this, args)
  }
  return descriptor
}
