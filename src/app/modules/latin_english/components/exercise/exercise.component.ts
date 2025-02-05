import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { Exercise } from '../../../core/interfaces/exercise';

@Component({
  selector: 'app-exercise',
  imports: [
    NgIf,
    NgFor,
    NgClass,
  ],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  data = input.required<Exercise>();
}
