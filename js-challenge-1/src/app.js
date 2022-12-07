(() => {
  class Pokemon {
    _name
    _type
    _evolutions

    get name () { return this._name }
    set name (name) { this._name = name }

    get type () { return this._type }
    set type (type) { this._type = type }

    get evolutions () { return this._evolutions }
    set evolutions (evolutions) { this._evolutions = evolutions }

    constructor (type, evolutions) {
      this._name = evolutions[0]
      this._type = type
      this._evolutions = evolutions
    }

    attack () {
      console.log(`${this._name} ataco`)
    }

    evolve () {
      const index = this._evolutions.indexOf(this._name)
      if (index >= 0 && index < this._evolutions.length - 1) {
        console.log(`${this._name} evolve to ${this._evolutions[index + 1]}`)
        this._name = this._evolutions[index + 1]
      } else {
        console.log('Ya esta en la evolucion maxima')
      }
    }

    getInfo () {
      console.log(`Name: ${this._name}`)
      console.log(`Type: ${this._type}`)
      console.log('Evolutions')
      this._evolutions.forEach((evolution, index) => {
        console.log(`${index + 1}: ${evolution}`)
      })
    }
  }

  const charmander = new Pokemon('Fuego', ['Charmander', 'Charmeleon', 'Charizard'])
  charmander.getInfo()
  charmander.attack()
  charmander.evolve()
  charmander.attack()
  charmander.evolve()
  charmander.attack()
  charmander.evolve()
})()
