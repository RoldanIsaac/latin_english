import { Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { delay, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { AppService } from '../../services/app.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-audio-label',
  imports: [
    NgFor,
    NgIf,
    NgClass,
  ],
  templateUrl: './audio-label.component.html',
  styleUrl: './audio-label.component.css'
})
export class AudioLabelComponent {
  // @ViewChild audioPlayer =  

  @Input() audio!: string;
  @Input() label!: string;
  @Input() id!: number;
  hasPlayed: boolean = false;

  audioElement = viewChild<ElementRef>('audioPlayer');

  playAudio(/* audio: HTMLAudioElement */){
    this.audioElement()?.nativeElement.play()
  }

  constructor(private _appService: AppService){

  }

  onViewChanged(){
    // this.playAudio()
  }

  ngOnInit() {
    this._appService.emitTime$.subscribe((currentAudioLabelId) => {
      if( currentAudioLabelId == this.id ) {
        this.playAudio()
        this.hasPlayed = true;
      }
    })
  }

  ngOnDestroy(){
    
  }
}