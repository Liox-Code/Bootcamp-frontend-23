import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() iconName = ''
  @Input() iconColor = ''

  ngOnInit(): void {
    console.log({
      iconName: this.iconName,
      iconColor: this.iconColor
    })
  }
}
