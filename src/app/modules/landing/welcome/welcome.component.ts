import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AddComponent } from '../../../components/add/add.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-welcome',
  imports: [
    CardComponent,
    AddComponent,
    NgFor,
    NgClass,
    NgIf,
    FooterComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  items = [
    'Support For the Way You Code',
    'Keep Your Pens Private',
    'Embed Pens',
    'Asset Hosting',
    'Build Entire Projects',
    'Collab Mode',
  ]

  adds = [
    {
      title: 'Whatever',
      body: 'Anything Else',
      cta: 'Hit me',
      imgPath: 'images/01.jpg'
    },
    {
      title: 'Whatever',
      body: 'Anything Else',
      cta: 'Hit me',
      imgPath: 'images/images.png'
    },
  ]

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  onGetStarted() {
    this._router.navigate(['app/home']);
  }

}
