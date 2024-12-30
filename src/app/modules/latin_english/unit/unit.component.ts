
import { Component } from '@angular/core';
import { Observable, Subject, zip, tap, mergeMap, take, interval } from 'rxjs';
import { AppService } from '../../../services/app.service';
import { AudioLabelComponent } from '../../../components/audio-label/audio-label.component';
import { NgFor, NgIf } from '@angular/common';

interface data {
  id: number, 
  en: string, 
  es: string
}

type steam = any;

@Component({
  selector: 'app-unit',
  imports: [
    AudioLabelComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css',
  // hostDirectives: [
  //   FunctionalitiyDirective
  // ]
})
export class UnitComponent {

  title = 'ng-host-handling';

  // ------------------------------------------------------
  //  @ Playing with RxJs 
  // ------------------------------------------------------

  // steam$: Observable<steam>;
  // overHeatedSteam$: Observable<any>;
  
  _turbo_generator = new Subject<string>();
  
  _chaff = new Subject<string>();
  _water = new Subject<string>();
  _forced_air = new Subject<string>();
  _fire = new Subject<string>();


  
  ngOnInit(): void {

    // this.steam$ = zip(
    //   this._chaff.pipe(tap(console.log)),
    //   this._water.pipe(tap(console.log)),
    //   this._forced_air.pipe(tap(console.log)),
    //   this._fire.pipe(tap(console.log))
    // ).pipe(
    //   tap((steam) => console.log('Boilers burning'))
    // ); 

    // this.overHeatedSteam$ = this._turbo_generator.pipe(
    //   tap(time => console.log('Turbo generator is ready to start: ', time)),
    //   mergeMap(turbo => this.steam$.pipe( 
    //     take(1),
    //     tap(value => console.log(value))
    //   )),
    //   tap(steam => console.log('Delivered steam: '))
    // )


  }


  dispatchOrder(){
    console.log('Order given')
    this._turbo_generator.next('3pm');
  }

  // ------------------------------------------------------
  //  @ English
  // ------------------------------------------------------


  value: number = 9;

  // dialogComponent = FormComponent;

  constructor(private _appService: AppService){}

  textToSpeech: data[] = [
    {id: 1, en: 'Name', es: 'Nombre'},
    {id: 2, en: 'First name', es: 'Primer Nombre'},
    {id: 3, en: 'Second name', es: 'Segundo nombre'},
    {id: 4, en: 'Middle name', es: 'Segundo nombre'},
    {id: 5, en: 'Last name', es: 'Apellido'},
    {id: 6, en: 'Surname', es: 'Apellido'},
    {id: 7, en: 'Family name', es: 'Apellido'},
    {id: 8, en: 'Full name', es: 'Nombre complete'},
    {id: 9, en: 'Nickname', es: 'apodo, sobrenombre'},]

    playInARow(value: number){
      interval(2000).pipe(
        take(this.textToSpeech.length),
      ).subscribe(
        (index) => {
          if(this.textToSpeech){
            this._appService.emitTime = this.textToSpeech[index].id;
          }
        }
      )
    }
  
}
