type MoveType = {
  name: string;
  power: number;
}

class Pokemon {
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
  console.log(`target ${JSON.stringify(target, null, 3)}`)
  console.log(`propertyKey ${JSON.stringify(propertyKey, null, 3)}`)
  console.log(`descriptor ${JSON.stringify(descriptor, null, 3)}`)

  descriptor.value = function (...args: any[]) {
    console.log(`descriptor ${JSON.stringify(this, null, 3)}`)
    this.powerPointAvailable
  }

  return descriptor
}

const move = { name: 'thunderbolt', power: 90 }
const pikachu = new Pokemon('pikachu', 1)
pikachu.figth(move)
pikachu.figth(move)
