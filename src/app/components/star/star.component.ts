import { NgClass, NgIf } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'

@Component({
  selector: 'app-star',
  imports: [
    NgClass,
    NgIf,
    MatIconModule
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {

  number = input.required<number>();

  constructor(
    private _router: Router,
    private _maIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { }

  iconsUrl = "icons"
  isIcon: boolean = false;
  actionIconNames = [
    'star'
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

  onStarClick() {
    this._router.navigate([`unit/${this.number()}`]);
  }
}
