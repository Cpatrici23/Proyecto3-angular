import { Injectable } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FellikeService {

 url: string = "http://localhost:3000/vivienda"


  constructor(private http: HttpClient) { }
  findAll(): Observable<IVivienda[]> {
    return this.http.get<IVivienda[]>(this.url);
  }
  findById(id: number): Observable<IVivienda>{
    return this.http.get<IVivienda>(`${this.url}/${id}`)
  }

filteredByCategory():Observable<IVivienda[]>{
  return this.http.get<IVivienda[]>(`${this.url}?category=beach-home`)
}
filteredByMountainCategory():Observable<IVivienda[]>{
  return this.http.get<IVivienda[]>(`${this.url}?category=mountain-home`)
}
filteredByTreeHomeCategory():Observable<IVivienda[]>{
  return this.http.get<IVivienda[]>(`${this.url}?category=tree-home`)
}
 createNewHome(vivienda: IVivienda): Observable<IVivienda>{
    return this.http.post<IVivienda>(this.url,  vivienda)
  }
  createNewUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.url,  user)
  }

}
