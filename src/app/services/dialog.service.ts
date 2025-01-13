import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly _dialog = inject(MatDialog);
  private dialogResultSubject = new Subject<any>();

  closeModal(): void {
    this._dialog.closeAll();
  }

  openModal<CT, T>(componentRef: ComponentType<CT>, data?: T, isEditing = false): Observable<Partial<T>> {
    const config = { data, isEditing };
    let dialogRef = this._dialog.open(componentRef, {
      data: config,
      maxHeight: '500px',
    })

    /**
     * Suscribirse al resultado del diálogo después de cerrarse
     */
    dialogRef.afterClosed().subscribe((newFormData: Partial<T>) => {
      console.log("[DialogService.openModal]");
      console.log(":::: Dialog result ::::");
      if(!newFormData) {
        console.log('No data');
      } else {
        console.log(newFormData);
        this.dialogResultSubject.next(newFormData)
      }
    })

    return this.dialogResultSubject.asObservable();
  }
}
