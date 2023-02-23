import { Component, EventEmitter, Input, Output } from '@angular/core';


type dropDownOptions = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {

  @Input() options: dropDownOptions[] = []
  @Output() selectedOption = new EventEmitter();

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    const selectedOption = this.options.find((option) => {
      const optionId = option.id.toString()
      return optionId === value
    })
    this.selectedOption.emit(selectedOption)
  }
}
