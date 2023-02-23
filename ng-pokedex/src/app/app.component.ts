import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'bug-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Bug.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'dark-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Dark.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'dragon-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Dragon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'electric-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Electric.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'fairy-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Fairy.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'fighting-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Fighting.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'fire-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Fire.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'flying-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Flying.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ghost-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Ghost.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'grass-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Grass.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ground-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Ground.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ice-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Ice.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'normal-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Normal.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'poison-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Poison.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'psychic-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Psychic.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'rock-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Rock.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'steel-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Steel.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'water-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Water.svg')
    );
  }
}
