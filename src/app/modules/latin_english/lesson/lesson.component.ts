import { Component, OnInit, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LatinEnglishService } from '../../../services/latin-english.service';
import { AppService } from '../../../services/app.service';
import { ExerciseComponent } from '../components/exercise/exercise.component';
import { Exercise } from '../../core/interfaces/exercise';

@Component({
  selector: 'app-lesson',
  imports: [
    ExerciseComponent
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent implements OnInit {

  lesson = signal<any>(null);
  currentExercise: number = 0;
  currentExerciseData = signal<Exercise>({
    instruction: '',
  });

  iconsUrl = "icons"
  isIcon: boolean = false;
  actionIconNames = [
    'star'
  ]

  constructor(
    private _router: Router,
    private _maIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _activatedRoute: ActivatedRoute,
    private _latinEnglishService: LatinEnglishService,
    private _appService: AppService,
  ) { }
  
  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      console.log(params)
      this._latinEnglishService.getLessonData(Number(params['id']))
      .subscribe((response: any) => {
        console.log(response)
        this.lesson.set(response)
      })
    });

    
    // Registering Huge Icons
    for (let index = 0; index < this.actionIconNames.length; index++) {
      const iconName = this.actionIconNames[index];
      
      this._maIconRegistry.addSvgIcon(iconName, 
          this._domSanitizer.bypassSecurityTrustResourceUrl(`${this.iconsUrl}/${iconName}.svg`)
      );
    }
    this.isIcon = true;
  }

  start(): void {
    this.currentExercise += 1;
    this._latinEnglishService.getExcersiseData(Number(this.currentExercise)).subscribe((response) => {
      console.log(response)

      const exercise: Exercise = {
        instruction: response.instructions,
        images: response.images,
        audios: response.audio
      }

      this.currentExerciseData.set(exercise);
    }
    )
  }

  next(): void {
    this.currentExercise += 1;
    this._latinEnglishService.getExcersiseData(Number(this.currentExercise)).subscribe((response) => {
      console.log(response);

      const exercise: Exercise = {
        instruction: response.instructions,
        images: response.images,
        audios: response.audio
      }

      this.currentExerciseData.set(exercise);
    })
  }
}
