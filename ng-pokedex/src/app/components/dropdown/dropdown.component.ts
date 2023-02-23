import { Component, EventEmitter, Input, Output } from '@angular/core';


type dropDownOptions = {
  name: string
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {

  @Input() options: dropDownOptions[] = []
  @Output() selectedOption = new EventEmitter<string>();

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.selectedOption.emit(value)
  }
}
