import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _emitTime: ReplaySubject<number> = new ReplaySubject<number>(1);

  constructor() { }

  set emitTime(value: number) {
    this._emitTime.next(value)
  }

  get emitTime$(): Observable<number> {
    return this._emitTime.asObservable()   
  }  

}
