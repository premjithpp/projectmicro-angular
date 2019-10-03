import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AdminCredentials } from './admin-credentials';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getUserCred(userName:String): Observable<AdminCredentials>{

    return this.http.get<AdminCredentials>('http://localhost:8092/admin/' +userName );
     
  }
}
