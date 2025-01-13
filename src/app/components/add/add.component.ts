import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-add',
  imports: [
    CardComponent,
    ImageComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  imgPath = input.required<string>();
}
