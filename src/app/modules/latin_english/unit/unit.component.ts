
import { Component } from '@angular/core';
import { Observable, Subject, zip, tap, mergeMap, take, interval } from 'rxjs';
import { AppService } from '../../../services/app.service';
import { AudioLabelComponent } from '../../../components/audio-label/audio-label.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LessonComponent } from '../lesson/lesson.component';
import { LatinEnglishService } from '../../../services/latin-english.service';
import { BigStarComponent } from '../components/big-star/big-star.component';

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
    LessonComponent,
    NgIf,
    BigStarComponent,
  ],
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css',
  // hostDirectives: [
  //   FunctionalitiyDirective
  // ]
})
export class UnitComponent {

  title = 'ng-host-handling';
  heading: any;

  constructor(
    private _latinEnglishService: LatinEnglishService,
    private _appService: AppService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      // console.log(params)
      this._latinEnglishService.getUnitData(Number(params['id'])).subscribe((response: any) => {
        console.log(response)
        this.heading = response.content.heading
      })
    });

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

    
    
    
   

    /**
     * <div>
        <h1>EXPRESIONES QUE SE UTILIZAN PARA <strong style="color: dodgerblue;">NOMBRES</strong>   </h1>
        <h4>Escuche y preste atención a algunas expresiones que se utilizan para decir nombres y apellidos. No repita</h4>
    </div>

    <div>
        <button (click)="playInARow(value)">Escuchar audios</button>

        <div>
            <app-audio-label *ngFor="let audio of textToSpeech;"
                [id]="audio.id"
                [audio]="audio.en"
                [label]="audio.es"
            >
            </app-audio-label>
        </div>
    </div>
     */

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


}
