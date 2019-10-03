import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Trainee } from './Trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  private baseUrl = 'http://localhost:8092/trainee/signup';

  constructor(private http: HttpClient) { }
  createTrainee(trainee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, trainee);
  }

  
 getUserCred(userName:String): Observable<Trainee>{

  return this.http.get<Trainee>('http://localhost:8092/userName/'+userName);
   
}
}
