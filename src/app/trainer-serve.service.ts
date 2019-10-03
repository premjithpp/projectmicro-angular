import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainerServeService {
  private baseUrl = 'http://localhost:8092/trainer/signup';

  constructor(private http: HttpClient) { }

  createTrainer(trainer: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, trainer);
  }
}
