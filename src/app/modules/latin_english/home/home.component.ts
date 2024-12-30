import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarComponent } from '../../../components/star/star.component';
import { CardComponent } from '../../../components/card/card.component';
import { ImageComponent } from '../../../components/image/image.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '../../../services/dialog.service';
import { InfoComponent } from '../modals/info/info.component';

@Component({
  selector: 'app-home',
  imports: [
    NgFor,
    NgIf,
    StarComponent,
    CardComponent,
    ImageComponent,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  infoModal = InfoComponent;


  units: any[] = [
    {
      number: 1,
      name: "Unit 1"
    },
    {
      number: 2,
      name: "Unit 2"
    },
    {
      number: 3,
      name: "Unit 3"
    },
    {
      number: 4,
      name: "Unit 4"
    }
  ];

  constructor(private _dialogService: DialogService) {}


  ngOnInit(): void {
    
  }

  onAboutClick(): void {
    console.log('1')
    this._dialogService.openModal(this.infoModal).subscribe(() => {
      console.log
    })
  }

}
