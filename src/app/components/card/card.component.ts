import { NgIf } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { MatIcon, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    MatIconModule,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  // number = input.required<number>();
  iconVisibility = input.required<boolean>();

  constructor(
    private _router: Router,
    private _maIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { }

  iconsUrl = "icons"
  isIcon: boolean = false;
  actionIconNames = [
    'maps'
  ]


  ngOnInit(): void {

    // Registering Huge Icons
    for (let index = 0; index < this.actionIconNames.length; index++) {
      const iconName = this.actionIconNames[index];
      
      this._maIconRegistry.addSvgIcon(iconName, 
          this._domSanitizer.bypassSecurityTrustResourceUrl(`${this.iconsUrl}/${iconName}.svg`)
      );
    }
    this.isIcon = true;
    
  }

  onCtaClick() {
    // this._router.navigate([`unit/${this.number()}`]);
    console.log('HERE')
  }
}
