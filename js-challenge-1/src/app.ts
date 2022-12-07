(() => {
  class Pokemon {
    private _name
    private _type
    private _evolutions

    get name() { return this._name}
    set name(name: string) { this._name = name}

    get type() { return this._type}
    set type(type: string) { this._type = type}

    get evolutions() { return this._evolutions}
    set evolutions(evolutions: string) { this._evolutions = evolutions}

    constructor(name:string, type:string, evolutions:string){
      this._name = name
      this._type = type
      this._evolutions = evolutions
    }

    attack () {
      console.log(`${this._name} ataco`)
    }

    evolve () {
      console.log(`${this._name} evolve to ${this._evolutions}`)
    }

    getInfo () {
      console.log(`name: ${this._name}`)
      console.log(`type: ${this._type}`)
      console.log(`evolutions: ${this._evolutions}`)
    }
  }

  const charmander = new Pokemon("Charmander", "fuego", "Charmeleon")
  charmander.getInfo()
  charmander.attack()
  charmander.evolve()
})()
