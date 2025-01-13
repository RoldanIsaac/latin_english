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
      name: "Unit 1",
      content: {
        heading: `Bienvenido a la primera unidad de este curso.  
    
            Esta   unidad, como todas las unidades del curso está dividida en 5 Lecciones, 3 secciones de consultas y 1 examen. 
    
            En esta primera unidad aprenderá algunas expresiones que se utilizan para 
            -	Saludar
            -	Presentarse y presentar a otras personas.
            -	Preguntar y decir nombres y apellidos.
            -	Preguntar y decir como está una persona
            -	Preguntar y deletrear palabras.
            -	 Desedirse
    
            De  Click en la triángulo 1 de la estrella para comenzar a estudiar la primera lección 
          `
      }
    },
    {
      number: 2,
      name: "Unit 2",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 3,
      name: "Unit 3",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 4,
      name: "Unit 4",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 5,
      name: "Unit 5",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 6,
      name: "Unit 6",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 7,
      name: "Unit 7",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 8,
      name: "Unit 8",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 9,
      name: "Unit 9",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 10,
      name: "Unit 10",
      content: {
        heading: '23'
        
      } 
    },
    {
      number: 11,
      name: "Unit 11",
      content: {
      heading: '23'
      
    } 
    },
    {
      number: 12,
      name: "Unit 12",
      content: {
      heading: '23'
      
    } 
    },
    {
      number: 13,
      name: "Unit 13",
      content: {
      heading: '23'
      
    } 
    },
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




