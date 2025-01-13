import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Form } from '@angular/forms';
import { ContentTypes } from './content-type.enum';


@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  /**
   * Url base para las entities.
   * A partir de esta url se realizan los distintos request
   */
  private apiUrl = 'http://localhost:3000/api/sho/v1'


  /**
   * Inyectar el cliente http de angular en el constructor 
   * del servicio para utilizar sus métodos
   * GET, POST, PATCH, DELETE
   */
  constructor(private http: HttpClient) { }


  /**
   * Llamar este método para configurar las cabeceras en los request
   * que lo necesiten.
   */
  setHeader(contentType: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': contentType })
    } 
    return httpOptions;
  }

  
  /**
   * GET ALL
   * Obtener todos del tipo entidad en la database 
   */
  get(endpoint: string): Observable<T[]> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T[]>(url)
  }

  /**
   * GET ONE
   * Obtener uno del tipo entidad en la database 
   */
  getOne(id: number, endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.get<T>(url)
  }

  /**
   * POST
   * Añadir una nueva entidad en la database 
   */
  add(data: T, endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = this.setHeader(ContentTypes.applicationJson)
    return this.http.post<T>(url, data, options);
  }

  addMultipartFormData(data: FormData, endpoint: string) {
    const url = `${this.apiUrl}/${endpoint}`;
    /**
     * multipart/form-data header should be set by default by the browser
     */
    // const options = this.setHeader(ContentTypes.multiformPartData)
    return this.http.post(url, data, 
      /* options */
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  /**
   * PATCH
   * Actualizar una entidad por medio del id en la database 
   */
  update(data: Partial<T>, id: number, endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    const options = this.setHeader(ContentTypes.applicationJson)
    return this.http.patch<T>(url, data, options);
  } 

  /**
   * DELETE
   * Eliminar una entidad por medio del id en la database 
   */
  delete(id: number, endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.delete<T>(url);
  }
}
