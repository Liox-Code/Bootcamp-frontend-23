import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchQuery = new EventEmitter();

  onSearchChange(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchQuery.emit(value)
  }
}
