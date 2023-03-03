import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent {
  pokemonForm: FormGroup;

  constructor() {
    this.pokemonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      image: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.pokemonForm.value)
    alert('El Pokémon ha sido guardado correctamente.');
    this.pokemonForm.reset();
  }
}
